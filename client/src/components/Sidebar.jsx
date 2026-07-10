import { NavLink } from "react-router-dom";

export default function Sidebar() {
  const menuItems = [
    { name: "Dashboard", path: "/dashboard", icon: "📊" },
    { name: "Inspiration", path: "/inspiration", icon: "💡" },
    { name: "AI Design", path: "/room-makeover", icon: "✨" },
    { name: "DIY Ideas", path: "/diy", icon: "🛠️" },
    { name: "Shop", path: "/shop", icon: "🛒" },
    { name: "Before & After", path: "/before-after", icon: "🔄" },
    { name: "Profile", path: "/profile", icon: "👤" },
  ];

  return (
    <aside className="w-64 bg-white/30 backdrop-blur-xl border-r border-white/20 min-h-screen p-6 flex flex-col justify-between tracking-wide">
      <div>
        <h1 className="text-2xl font-black bg-gradient-to-r from-pink-500 via-purple-600 to-indigo-600 bg-clip-text text-transparent mb-10 px-4">
          homeVibe
        </h1>

        <nav className="space-y-1.5">
          {menuItems.map((item) => (
            <NavLink
              key={item.path}
              to={item.path}
              className={({ isActive }) =>
                `flex items-center gap-3 px-4 py-3 rounded-xl font-semibold transition-all duration-200 ${
                  isActive
                    ? "bg-gradient-to-r from-pink-500/20 to-purple-500/20 border border-white/30 text-purple-950 shadow-sm"
                    : "text-slate-700 hover:bg-white/20 hover:text-purple-900"
                }`
              }
            >
              <span className="text-lg">{item.icon}</span>
              {item.name}
            </NavLink>
          ))}
        </nav>
      </div>

      <div className="px-4 border-t border-purple-200/20 pt-4">
        <button className="flex items-center gap-3 text-slate-600 font-semibold hover:text-red-500 transition-colors w-full text-left">
          <span>🚪</span> Log Out
        </button>
      </div>
    </aside>
  );
}