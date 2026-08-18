import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { supabase } from "../services/supabase";

export default function Landing() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [fullName, setFullName] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  async function handleSignup(e) {
    e.preventDefault();
    setLoading(true);
    try {
      const { error } = await supabase.auth.signUp({
        email,
        password,
        options: { data: { full_name: fullName } }
      });
      if (error) throw error;
      alert("Registration complete! Your profile is secured.");
      navigate("/dashboard");
    } catch (err) {
      alert(err.message);
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="min-h-screen font-sans flex text-slate-900 bg-slate-950 overflow-hidden relative selection:bg-purple-200">
      
      {/* ================= LEFT SECTION: DARK TEXTURED INTERIOR IMAGERY ================= */}
      <div 
        className="hidden lg:flex lg:w-[50%] bg-cover bg-center relative items-end p-12 transition-all duration-500"
        style={{ 
          backgroundImage: `linear-gradient(to right, rgba(15, 23, 42, 0.2), rgba(15, 23, 42, 0.75)), url('https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?q=80&w=1200&auto=format&fit=crop')` 
        }}
      >
        <div className="relative z-10 max-w-md space-y-3 animate-fade-in-up">
          <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-pink-500 via-purple-500 to-indigo-500 shadow-xl flex items-center justify-center text-white font-black text-2xl">
            h
          </div>
          <h1 className="text-4xl font-black text-white tracking-tight leading-none">
            home<span className="bg-gradient-to-r from-pink-400 via-purple-400 to-indigo-400 bg-clip-text text-transparent">Vibe</span>
          </h1>
          <p className="text-sm font-bold text-slate-300 leading-relaxed">
            Turn your empty layouts into professionally curated minimalist realities instantly using the Llama 4 Vision matrix.
          </p>
        </div>
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950/50 via-transparent to-transparent pointer-events-none" />
      </div>

      {/* ================= RIGHT SECTION: HOMEVIBE THEME AUTH CONSOLE ================= */}
      {/* Replaced dark background with the vibrant homevibe-bg class */}
      <div className="w-full lg:w-[50%] flex flex-col justify-between p-6 md:p-12 homevibe-bg relative overflow-hidden z-10 border-l border-white/20">
        
        {/* Ambient Glow Elements to make the glass card pop */}
        <div className="absolute -top-20 -right-20 w-80 h-80 bg-purple-500/20 rounded-full filter blur-[120px] pointer-events-none" />
        <div className="absolute -bottom-20 -left-20 w-80 h-80 bg-pink-500/20 rounded-full filter blur-[120px] pointer-events-none" />

        {/* Top Header Navigation Link */}
        <header className="w-full flex items-center justify-between lg:justify-end relative z-10">
          <span className="text-xl font-black text-purple-950 lg:hidden">
            home<span className="text-purple-600">Vibe</span>
          </span>
          <p className="text-xs font-bold text-purple-950/80">
            Already have an account?{" "}
            <Link to="/login" className="text-purple-700 font-black hover:underline ml-1">
              Log In
            </Link>
          </p>
        </header>

        {/* Truly Glassmorphic Signup Form Box (Matches Theme) */}
        <main className="w-full max-w-md mx-auto my-auto relative z-10 pt-8 pb-12">
          <div className="bg-white/30 backdrop-blur-2xl border border-white/50 p-8 rounded-[2.5rem] shadow-2xl space-y-6 shadow-purple-950/5">
            
            <div className="text-center space-y-1.5">
              <h2 className="text-3xl font-black text-purple-950 tracking-tight">Create Your Account</h2>
              <p className="text-xs font-bold text-slate-600">Get inspiring design ideas & remodel like a pro!</p>
            </div>

            <form onSubmit={handleSignup} className="space-y-4">
              <div className="space-y-1">
                <label className="text-[10px] font-black text-purple-950/80 tracking-wider uppercase pl-1">Full Name</label>
                <input
                  type="text"
                  placeholder="John Doe"
                  value={fullName}
                  onChange={(e) => setFullName(e.target.value)}
                  required
                  className="w-full bg-white/60 backdrop-blur-md border border-white/40 rounded-xl p-3.5 outline-none focus:ring-2 focus:ring-purple-500/30 focus:border-purple-400 focus:bg-white/80 font-medium text-sm text-purple-950 shadow-inner transition-all duration-200"
                />
              </div>

              <div className="space-y-1">
                <label className="text-[10px] font-black text-purple-950/80 tracking-wider uppercase pl-1">Email Address</label>
                <input
                  type="email"
                  placeholder="name@domain.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  className="w-full bg-white/60 backdrop-blur-md border border-white/40 rounded-xl p-3.5 outline-none focus:ring-2 focus:ring-purple-500/30 focus:border-purple-400 focus:bg-white/80 font-medium text-sm text-purple-950 shadow-inner transition-all duration-200"
                />
              </div>

              <div className="space-y-1">
                <label className="text-[10px] font-black text-purple-950/80 tracking-wider uppercase pl-1">Password</label>
                <input
                  type="password"
                  placeholder="••••••••"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                  className="w-full bg-white/60 backdrop-blur-md border border-white/40 rounded-xl p-3.5 outline-none focus:ring-2 focus:ring-purple-500/30 focus:border-purple-400 focus:bg-white/80 font-medium text-sm text-purple-950 shadow-inner transition-all duration-200"
                />
              </div>

              <button
                type="submit"
                disabled={loading}
                className="w-full bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 text-white font-black py-4 rounded-xl shadow-lg shadow-purple-500/20 hover:opacity-95 disabled:opacity-50 active:scale-[0.99] transition-all text-xs uppercase tracking-widest mt-2"
              >
                {loading ? "Registering Profile..." : "Sign Up"}
              </button>
            </form>

            {/* Social Authentication Row */}
            <div className="space-y-3 pt-2">
              <div className="flex items-center justify-center gap-2 text-[10px] font-black tracking-wider text-slate-400 uppercase">
                <div className="h-px bg-purple-950/10 flex-1" />
                <span>Or Sign Up With</span>
                <div className="h-px bg-purple-950/10 flex-1" />
              </div>
              <div className="flex items-center justify-center gap-4">
                <button className="w-10 h-10 rounded-full bg-white/60 border border-white/60 flex items-center justify-center text-sm font-bold hover:bg-white/80 text-purple-950 transition-all shadow-sm">G</button>
                <button className="w-10 h-10 rounded-full bg-white/60 border border-white/60 flex items-center justify-center text-sm font-bold hover:bg-white/80 text-purple-950 transition-all shadow-sm">F</button>
                <button className="w-10 h-10 rounded-full bg-white/60 border border-white/60 flex items-center justify-center text-sm font-bold hover:bg-white/80 text-purple-950 transition-all shadow-sm"></button>
              </div>
            </div>

          </div>
        </main>

        {/* Global Evaluation Footer branding */}
        <footer className="w-full text-center text-[10px] font-bold text-purple-950/60 relative z-10">
          © 2026 homeVibe Spaces Inc. Project Submission Sandbox.
        </footer>
      </div>

    </div>
  );
}