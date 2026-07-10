import { useState, useEffect } from "react";

export default function Topbar() {
  const [cartCount, setCartCount] = useState(() => {
    return parseInt(localStorage.getItem("homevibe_cart_count") || "0");
  });

  useEffect(() => {
    const syncCart = () => {
      setCartCount(parseInt(localStorage.getItem("homevibe_cart_count") || "0"));
    };
    window.addEventListener("storage", syncCart);
    return () => window.removeEventListener("storage", syncCart);
  }, []);

  return (
    <header className="bg-white/10 backdrop-blur-md border-b border-white/10 h-20 px-8 flex items-center justify-between tracking-wide">
      <div>
        <h2 className="text-2xl font-black bg-gradient-to-r from-purple-950 to-indigo-950 bg-clip-text text-transparent">
          Dashboard
        </h2>
        <p className="text-xs font-bold text-slate-600/80 mt-0.5">
          Welcome back 👋
        </p>
      </div>

      <div className="flex items-center gap-6">
        {/* Realistic Shopping Space Cart Badge Indicator */}
        <div className="relative cursor-pointer hover:scale-105 transition-transform p-2 bg-white/40 border border-white/30 rounded-xl">
          <span className="text-xl">🛒</span>
          {cartCount > 0 && (
            <span className="absolute -top-1 -right-1 bg-gradient-to-r from-pink-500 to-purple-600 text-white text-[10px] font-black w-5 h-5 flex items-center justify-center rounded-full border border-white shadow-md animate-bounce">
              {cartCount}
            </span>
          )}
        </div>

        <div className="w-10 h-10 rounded-full border-2 border-white/40 shadow-sm overflow-hidden bg-gradient-to-tr from-pink-400 to-indigo-400 flex items-center justify-center text-white font-black text-sm cursor-pointer hover:scale-105 transition-transform">
          CK
        </div>
      </div>
    </header>
  );
}