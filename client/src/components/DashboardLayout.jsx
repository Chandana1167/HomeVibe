import Sidebar from "./Sidebar";
import Topbar from "./Topbar";

export default function DashboardLayout({ children }) {
  return (
    <div className="flex min-h-screen homevibe-bg font-sans text-slate-800 antialiased overflow-x-hidden">
      <Sidebar />

      <div className="flex-1 flex flex-col min-w-0">
        <Topbar />

        {/* This main panel wrapper applies full glass-bleed transitions natively */}
        <main className="p-6 md:p-8 flex-1 overflow-y-auto animate-fade-in-up">
          <div className="max-w-7xl mx-auto space-y-8">
            {children}
          </div>
        </main>
      </div>
    </div>
  );
}