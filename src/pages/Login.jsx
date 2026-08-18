import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { supabase } from "../services/supabase";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [resetLoading, setResetLoading] = useState(false);
  const navigate = useNavigate();

  async function handleLogin(e) {
    e.preventDefault();
    setLoading(true);
    try {
      const { error } = await supabase.auth.signInWithPassword({ email, password });
      if (error) throw error;
      navigate("/dashboard");
    } catch (err) {
      alert(err.message);
    } finally {
      setLoading(false);
    }
  }

  async function handleForgotPassword() {
    if (!email) {
      alert("Please enter your email address in the field above first.");
      return;
    }

    setResetLoading(true);
    try {
      const { error } = await supabase.auth.resetPasswordForEmail(email, {
        redirectTo: `${window.location.origin}/reset-password`,
      });
      if (error) throw error;
      alert("Password reset email sent! Check your inbox.");
    } catch (err) {
      alert(err.message || "Failed to send reset email.");
    } finally {
      setResetLoading(false);
    }
  }

  return (
    <div 
      className="min-h-screen font-sans antialiased flex items-center justify-center p-4 relative overflow-hidden bg-cover bg-center"
      style={{ 
        backgroundImage: `linear-gradient(rgba(243, 232, 255, 0.4), rgba(224, 231, 255, 0.4)), url('https://images.unsplash.com/photo-1583847268964-b28dc8f51f92?q=80&w=1600&auto=format&fit=crop')` 
      }}
    >
      {/* Background Glows */}
      <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-pink-400/30 rounded-full filter blur-[100px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-72 h-72 bg-indigo-400/30 rounded-full filter blur-[100px] pointer-events-none" />

      <div className="bg-white/40 backdrop-blur-2xl border border-white/60 w-full max-w-md p-8 md:p-10 rounded-[2.5rem] shadow-2xl space-y-6 relative z-10">
        <div className="text-center space-y-2">
          <div className="inline-flex items-center gap-2 mb-2">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-tr from-pink-500 via-purple-500 to-indigo-500 flex items-center justify-center text-white font-black text-lg">
              h
            </div>
            <span className="text-xl font-black text-purple-950">homeVibe</span>
          </div>
          <h2 className="text-3xl font-black text-purple-950">Welcome Back</h2>
          <p className="text-xs font-bold text-slate-700">Enter your credentials to access your design engine</p>
        </div>

        <form onSubmit={handleLogin} className="space-y-4">
          <div className="space-y-1">
            <label className="text-xs font-extrabold text-purple-950 tracking-wider uppercase pl-1">Email Address</label>
            <input
              type="email"
              placeholder="name@domain.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="w-full bg-white/70 backdrop-blur-md border border-white/50 rounded-xl p-3.5 outline-none focus:ring-2 focus:ring-purple-500/30 focus:border-purple-400 focus:bg-white/90 font-medium text-sm text-purple-950 shadow-inner transition-all"
            />
          </div>

          <div className="space-y-1">
            <div className="flex items-center justify-between pl-1">
              <label className="text-xs font-extrabold text-purple-950 tracking-wider uppercase">Password</label>
              <button
                type="button"
                onClick={handleForgotPassword}
                disabled={resetLoading}
                className="text-[11px] font-extrabold text-purple-900 hover:text-pink-600 hover:underline tracking-tight transition-colors disabled:opacity-50"
              >
                {resetLoading ? "Sending..." : "Forgot password?"}
              </button>
            </div>
            <input
              type="password"
              placeholder="••••••••"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              className="w-full bg-white/70 backdrop-blur-md border border-white/50 rounded-xl p-3.5 outline-none focus:ring-2 focus:ring-purple-500/30 focus:border-purple-400 focus:bg-white/90 font-medium text-sm text-purple-950 shadow-inner transition-all"
            />
          </div>

          <button
            type="submit"
            disabled={loading}
            className="w-full bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 text-white font-black py-4 rounded-xl shadow-lg hover:opacity-95 disabled:opacity-50 active:scale-[0.99] transition-all text-sm uppercase tracking-wider mt-2"
          >
            {loading ? "Authenticating Session..." : "Sign In"}
          </button>
        </form>

        <p className="text-center text-xs font-bold text-slate-800 pt-2">
          Don't have an account?{" "}
          <Link to="/signup" className="text-purple-800 font-black hover:underline pl-1">
            Sign Up
          </Link>
        </p>
      </div>
    </div>
  );
}