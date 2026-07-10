import { useEffect, useState } from "react";
import { getProjects, deleteProject } from "../services/projectService";

export default function ProjectList({ refresh }) {
  const [projects, setProjects] = useState([]);

  async function loadProjects() {
    try {
      const data = await getProjects();
      setProjects(data);
    } catch (err) {
      console.log(err.message);
    }
  }

  useEffect(() => {
    loadProjects();
  }, [refresh]);

  async function handleDelete(id) {
    const confirmDelete = window.confirm(
      "Delete this project?"
    );

    if (!confirmDelete) return;

    try {
      await deleteProject(id);
      loadProjects();
    } catch (err) {
      alert(err.message);
    }
  }

  if (projects.length === 0) {
    return (
      <div className="bg-white rounded-xl shadow p-6 mt-8">
        <h2 className="text-xl font-bold">
          My Projects
        </h2>

        <p className="text-gray-500 mt-3">
          No projects found.
        </p>
      </div>
    );
  }

  return (
    <div className="bg-white rounded-xl shadow p-6 mt-8">

      <h2 className="text-2xl font-bold mb-6">
        My Projects
      </h2>

      <div className="space-y-4">

        {projects.map((project) => (
          <div
            key={project.id}
            className="border rounded-lg p-4 flex justify-between items-center"
          >
            <div>
              <h3 className="font-bold">
                {project.project_name}
              </h3>

              <p className="text-gray-600">
                {project.room_type}
              </p>

              <p className="text-sm text-gray-500">
                {project.description}
              </p>
            </div>

            <button
              onClick={() => handleDelete(project.id)}
              className="bg-red-500 text-white px-4 py-2 rounded-lg"
            >
              Delete
            </button>

          </div>
        ))}

      </div>

    </div>
  );
}