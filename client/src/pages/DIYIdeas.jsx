import { useState } from "react";
import DashboardLayout from "../components/DashboardLayout";

const diyIdeas = [
  {
    id: 1,
    title: "Wall Shelf Decoration",
    difficulty: "Easy",
    time: "30 mins",
    icon: "🪴",
    steps: [
      "Select a clean, empty wall space in your room.",
      "Secure brackets to the wall anchors using standard leveling tools.",
      "Place your wooden planks flat across the brackets.",
      "Style with minimal geometric pots, hanging vines, and books."
    ]
  },
  {
    id: 2,
    title: "DIY Photo Gallery",
    difficulty: "Easy",
    time: "45 mins",
    icon: "🖼️",
    steps: [
      "Print your favorite landscape or architectural photographs in uniform sizes.",
      "Map out a symmetrical grid on the floor using blue painter's tape.",
      "Mount minimal frames using heavy-duty command strips.",
      "Step back and adjust lighting alignment for a studio feel."
    ]
  },
  {
    id: 3,
    title: "Wooden Coffee Table",
    difficulty: "Medium",
    time: "2 Hours",
    icon: "🪵",
    steps: [
      "Sand down raw pallet timber planks cleanly to remove rough splinters.",
      "Assemble a rectangular base using wood glue and heavy wood screws.",
      "Apply a deep warm oak wood stain layer and let dry for 1 hour.",
      "Attach sleek black industrial metal hairpin legs to the underside corners."
    ]
  },
  {
    id: 4,
    title: "Bedroom Lighting Setup",
    difficulty: "Medium",
    time: "1 Hour",
    icon: "💡",
    steps: [
      "Run hidden warm white LED tracking strips along the back of your bed headboard.",
      "Use diffuse corner lamp textures to break harsh overhead bulb glares.",
      "Sync your bulbs with intelligent home systems for smart voice control.",
      "Automate soft schedules to dim down dynamically into evening rest phases."
    ]
  },
  {
    id: 5,
    title: "Indoor Plant Corner",
    difficulty: "Easy",
    time: "20 mins",
    icon: "🌿",
    steps: [
      "Find an empty corner that receives gentle indirect solar window morning light.",
      "Arrange high-elevation floor plants like Fiddle Leaf Figs or Monsters.",
      "Layer smaller textures like Snake Plants and Pothos below on low stools.",
      "Use textured organic ceramic or terracotta pots to build material warmth."
    ]
  },
  {
    id: 6,
    title: "Minimal Study Desk",
    difficulty: "Hard",
    time: "3 Hours",
    icon: "🪑",
    steps: [
      "Cut down a premium dense Birch plywood sheet to custom table dimension goals.",
      "Sand the surfaces meticulously using multi-grade paper layers down to micro finish.",
      "Apply a structural matte protective polyurethane coat to seal the finish.",
      "Mount onto structural steel trestle frame supports for a raw minimal aesthetic."
    ]
  },
];

export default function DIYIdeas() {
  const [selectedGuide, setSelectedGuide] = useState(null);

  return (
    <DashboardLayout>
      <div className="p-2 tracking-wide font-sans text-slate-900">
        
        <h1 className="text-4xl font-black bg-gradient-to-r from-purple-950 to-indigo-950 bg-clip-text text-transparent">
          DIY Interior Ideas
        </h1>
        <p className="text-sm font-semibold text-slate-600 mt-2 mb-8">
          Creative, budget-friendly ideas to transform your home spaces yourself.
        </p>

        {/* Dynamic Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {diyIdeas.map((idea) => (
            <div
              key={idea.id}
              className="bg-white/30 backdrop-blur-xl border border-white/40 rounded-[2rem] shadow-lg p-6 hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between group"
            >
              <div>
                <div className="text-5xl mb-4 transform group-hover:scale-110 transition-transform duration-300 inline-block">
                  {idea.icon}
                </div>
                <h2 className="text-xl font-extrabold text-purple-950">
                  {idea.title}
                </h2>
                
                <div className="mt-4 space-y-1.5 text-sm font-medium text-slate-700">
                  <p>🛠️ Difficulty: <span className="text-purple-600 font-bold">{idea.difficulty}</span></p>
                  <p>⏱️ Setup Duration: <span className="font-bold text-indigo-950">{idea.time}</span></p>
                </div>
              </div>

              {/* Functional View Step Trigger */}
              <button 
                onClick={() => setSelectedGuide(idea)}
                className="mt-6 w-full bg-gradient-to-r from-purple-600 to-indigo-600 text-white font-bold py-3 rounded-xl shadow-md hover:from-purple-700 hover:to-indigo-700 active:scale-[0.98] transition-all"
              >
                View Guide
              </button>
            </div>
          ))}
        </div>

        {/* Dynamic Glassmorphic Guide Modal Popup Overlay */}
        {selectedGuide && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/40 backdrop-blur-md transition-all animate-fadeIn">
            <div className="bg-white/80 backdrop-blur-2xl border border-white/50 w-full max-w-xl rounded-[2.5rem] p-8 shadow-2xl relative">
              
              {/* Close Button Trigger */}
              <button 
                onClick={() => setSelectedGuide(null)}
                className="absolute top-6 right-6 w-9 h-9 flex items-center justify-center rounded-full bg-purple-100 hover:bg-purple-200 text-purple-950 font-black transition-colors"
              >
                ✕
              </button>

              <div className="flex items-center gap-4 mb-6">
                <span className="text-5xl">{selectedGuide.icon}</span>
                <div>
                  <h3 className="text-2xl font-black text-purple-950 leading-tight">
                    {selectedGuide.title}
                  </h3>
                  <span className="inline-block mt-1 text-xs bg-purple-600/10 text-purple-700 border border-purple-200 px-3 py-0.5 rounded-full font-bold">
                    {selectedGuide.difficulty} Manual
                  </span>
                </div>
              </div>

              <h4 className="font-extrabold text-slate-800 mb-3 text-sm tracking-wider uppercase">
                Step-by-Step Instructions:
              </h4>
              
              <ol className="space-y-3">
                {selectedGuide.steps.map((step, idx) => (
                  <li key={idx} className="flex gap-3 text-sm font-semibold text-slate-700 bg-white/40 p-3.5 border border-white/30 rounded-2xl">
                    <span className="flex items-center justify-center w-5 h-5 rounded-full bg-purple-600 text-white text-xs font-bold shrink-0 mt-0.5">
                      {idx + 1}
                    </span>
                    <span>{step}</span>
                  </li>
                ))}
              </ol>

              <button
                onClick={() => setSelectedGuide(null)}
                className="mt-6 w-full bg-purple-950 text-white font-bold py-3 rounded-xl hover:bg-purple-900 transition-colors shadow-md"
              >
                Mark as Completed
              </button>
            </div>
          </div>
        )}

      </div>
    </DashboardLayout>
  );
}