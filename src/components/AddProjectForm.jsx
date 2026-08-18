import { useState } from "react";
import { createProject } from "../services/projectService";

export default function AddProjectForm({ refreshProjects }) {
  const [projectName, setProjectName] = useState("");
  const [roomType, setRoomType] = useState("");
  const [description, setDescription] = useState("");

  async function handleSubmit(e) {
    e.preventDefault();

    if (!projectName) {
      alert("Project name is required");
      return;
    }

    try {
      await createProject({
        project_name: projectName,
        room_type: roomType,
        description,
      });

      alert("Project Added Successfully!");

      setProjectName("");
      setRoomType("");
      setDescription("");

      refreshProjects();
    } catch (err) {
      alert(err.message);
    }
  }

  return (
    <div className="bg-white rounded-xl shadow p-6 mt-8">
      <h2 className="text-2xl font-bold mb-4">Add New Project</h2>

      <form onSubmit={handleSubmit} className="space-y-4">

        <input
          type="text"
          placeholder="Project Name"
          value={projectName}
          onChange={(e) => setProjectName(e.target.value)}
          className="w-full border rounded-lg p-3"
        />

        <input
          type="text"
          placeholder="Room Type"
          value={roomType}
          onChange={(e) => setRoomType(e.target.value)}
          className="w-full border rounded-lg p-3"
        />

        <textarea
          placeholder="Description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          className="w-full border rounded-lg p-3"
          rows="4"
        />

        <button
          className="bg-emerald-600 text-white px-6 py-3 rounded-lg"
        >
          Save Project
        </button>

      </form>
    </div>
  );
}