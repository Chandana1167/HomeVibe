import { useState, useEffect } from "react";
import { supabase } from "../services/supabase";
import { getProjects } from "../services/projectService";
import DashboardLayout from "../components/DashboardLayout";
import StatsCard from "../components/StatsCard";
import AnalyticsChart from "../components/AnalyticsChart";
import AddProjectForm from "../components/AddProjectForm";
import ProjectList from "../components/ProjectList";

export default function Dashboard() {
  const [refresh, setRefresh] = useState(false);
  const [projectCount, setProjectCount] = useState(0);
  const [aiCount, setAiCount] = useState(0);
  const [savedIdeasCount, setSavedIdeasCount] = useState(0);

  function refreshProjects() {
    setRefresh(!refresh);
  }

  useEffect(() => {
    async function fetchLiveDatabaseStats() {
      try {
        // 1. Get current logged-in user profile
        const { data: { user } } = await supabase.auth.getUser();
        if (!user) return;

        // 2. Fetch projects count directly from your live SQL table rows
        const projectsData = await getProjects();
        if (projectsData) {
          setProjectCount(projectsData.length);
        }

        // 3. Optional: Dynamic count parsing for AI generations if grouped inside project logs
        const aiRecords = projectsData ? projectsData.filter(p => p.room_type === "AI Transformation Logs") : [];
        setAiCount(aiRecords.length);

      } catch (err) {
        console.error("Database connection monitoring error:", err.message);
      }
    }

    fetchLiveDatabaseStats();

    // 4. Read saved inspiration items from interactive local state
    const syncInspirations = () => {
      const saved = localStorage.getItem("homevibe_saved_inspirations");
      if (saved) {
        setSavedIdeasCount(JSON.parse(saved).length);
      } else {
        setSavedIdeasCount(3); // Premium aesthetic default base count matching design images
      }
    };
    
    syncInspirations();
    window.addEventListener("storage", syncInspirations);
    return () => window.removeEventListener("storage", syncInspirations);
  }, [refresh]);

  return (
    <DashboardLayout>
      {/* Dynamic Database Statistics Panel Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <StatsCard
          title="Active Projects"
          value={projectCount.toString()}
          color="from-pink-600 via-purple-600 to-indigo-600"
        />

        <StatsCard
          title="AI Design Renders"
          value={aiCount.toString()}
          color="from-purple-600 to-indigo-600"
        />

        <StatsCard
          title="Saved Inspirations"
          value={savedIdeasCount.toString()}
          color="from-blue-600 to-indigo-600"
        />
      </div>

      {/* Analytics Graphical Sub-Section */}
      <div className="mt-8">
        <AnalyticsChart />
      </div>

      {/* Dynamic Creation Form Component */}
      <AddProjectForm refreshProjects={refreshProjects} />

      {/* Live Data Render Container */}
      <ProjectList refresh={refresh} />
    </DashboardLayout>
  );
}