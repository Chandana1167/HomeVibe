import { useState, useEffect } from "react";
import DashboardLayout from "../components/DashboardLayout";
import { analyzeRoomWithGroq } from "../services/groqService";
import { createProject } from "../services/projectService";
import { sendDesignSummaryEmail } from "../services/emailService";
import { supabase } from "../services/supabase";

export default function RoomMakeover() {
  const [imageFile, setImageFile] = useState(null);
  const [imagePreview, setImagePreview] = useState(null);
  const [prompt, setPrompt] = useState("");
  const [loading, setLoading] = useState(false);
  const [aiResponse, setAiResponse] = useState("");
  const [currentUserEmail, setCurrentUserEmail] = useState("");

  // Retrieve the active logged-in user profile from Supabase Auth Session
  useEffect(() => {
    async function fetchActiveUser() {
      try {
        const { data: { user } } = await supabase.auth.getUser();
        if (user) setCurrentUserEmail(user.email);
      } catch (err) {
        console.error("Session profile load tracking error:", err.message);
      }
    }
    fetchActiveUser();
  }, []);

  function handleImageChange(e) {
    const file = e.target.files[0];
    if (file) {
      setImageFile(file);
      setImagePreview(URL.createObjectURL(file));
    }
  }

  async function generateDesign() {
    if (!imageFile) {
      alert("Please upload an image of your space first.");
      return;
    }
    if (!prompt.trim()) {
      alert("Please enter design preferences (e.g., 'Make it modern Minimalist').");
      return;
    }

    setLoading(true);
    setAiResponse("");

    try {
      // 1. Fire Vision Analysis Request straight to the new Groq Llama 4 engine
      const feedback = await analyzeRoomWithGroq(imageFile, prompt);
      setAiResponse(feedback);

      // 2. Log generation entry into your Supabase SQL table (CRUD Requirement)
      await createProject({
        project_name: `AI Refinement: ${prompt.substring(0, 20)}...`,
        room_type: "AI Transformation Logs",
        description: feedback.substring(0, 200),
      });

      // 3. Dispatch an automated clean HTML brief via the Resend API Pipeline
      if (currentUserEmail) {
        await sendDesignSummaryEmail(currentUserEmail, {
          prompt: prompt,
          analysis: feedback
        });
      }

    } catch (err) {
      alert(`Execution Error: ${err.message}`);
    } finally {
      setLoading(false);
    }
  }

  return (
    <DashboardLayout>
      <div className="max-w-5xl mx-auto p-2 tracking-wide font-sans text-slate-900">
        <h1 className="text-4xl font-black bg-gradient-to-r from-purple-950 to-indigo-950 bg-clip-text text-transparent">
          AI Room Makeover
        </h1>
        <p className="text-sm font-semibold text-slate-600 mt-1 mb-8">
          Upload your physical empty room layout and see real-time design recommendations powered by Groq Vision.
        </p>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Left Block: File Controls Form */}
          <div className="bg-white/30 backdrop-blur-xl border border-white/40 p-6 rounded-[2rem] shadow-xl h-fit space-y-6">
            <div>
              <h3 className="font-extrabold text-purple-950 text-sm tracking-wider uppercase mb-3">
                Step 1: Upload Existing Space Image
              </h3>
              <label className="flex flex-col items-center justify-center w-full h-44 border-2 border-dashed border-purple-300 rounded-2xl cursor-pointer bg-white/40 hover:bg-white/60 transition-colors overflow-hidden relative">
                {imagePreview ? (
                  <img src={imagePreview} alt="Preview" className="w-full h-full object-cover" />
                ) : (
                  <div className="text-center p-4">
                    <span className="text-4xl">📸</span>
                    <p className="text-xs font-bold text-slate-600 mt-2">Select room canvas file</p>
                  </div>
                )}
                <input type="file" accept="image/*" onChange={handleImageChange} className="hidden" />
              </label>
            </div>

            <div>
              <h3 className="font-extrabold text-purple-950 text-sm tracking-wider uppercase mb-3">
                Step 2: Tell AI Your Style Goals
              </h3>
              <textarea
                placeholder="Example: Convert this into a bright Bohemian bedroom with custom wood planters, warm dim mood lamps, and a low floor bed layout..."
                value={prompt}
                onChange={(e) => setPrompt(e.target.value)}
                className="w-full bg-white/60 backdrop-blur-md border border-white/40 rounded-2xl p-4 outline-none focus:ring-2 focus:ring-purple-500/30 focus:border-purple-400 focus:bg-white/80 font-medium text-sm text-purple-950 shadow-inner transition-all duration-200"
                rows="4"
              />
            </div>

            <button
              onClick={generateDesign}
              disabled={loading}
              className="w-full bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 text-white font-black py-4 rounded-xl shadow-lg hover:opacity-95 disabled:opacity-50 active:scale-[0.99] transition-all"
            >
              {loading ? "Analyzing & Emailing Report..." : "✨ Generate AI Blueprint"}
            </button>
          </div>

          {/* Right Block: Live AI Stream Results Interface */}
          <div className="bg-white/30 backdrop-blur-xl border border-white/40 p-6 rounded-[2rem] shadow-xl min-h-[400px] flex flex-col">
            <h3 className="font-extrabold text-purple-950 text-sm tracking-wider uppercase mb-4 border-b border-purple-200/30 pb-3">
              📐 AI Architectural Recommendations
            </h3>

            {aiResponse ? (
              <div className="text-purple-950 text-sm font-medium leading-relaxed whitespace-pre-wrap bg-white/60 backdrop-blur-md p-6 rounded-2xl border border-white/50 flex-1 overflow-y-auto max-h-[400px] shadow-inner tracking-wide">
                <p className="antialiased select-text selection:bg-purple-200">
                  {aiResponse}
                </p>
              </div>
            ) : (
              <div className="flex-1 flex flex-col items-center justify-center text-center p-8 border border-dashed border-purple-300/60 rounded-2xl bg-white/10">
                <span className="text-5xl animate-pulse">🤖</span>
                <p className="text-sm font-bold text-slate-600 mt-4 max-w-xs">
                  Your premium custom interior strategy logs will manifest right here after triggering analysis!
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
}