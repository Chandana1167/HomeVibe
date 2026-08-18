import { Card, CardContent } from "./ui/card";

const projects = [
  {
    title: "Modern Living Room",
    date: "2 days ago",
  },
  {
    title: "Minimal Bedroom",
    date: "Yesterday",
  },
  {
    title: "Luxury Kitchen",
    date: "Last Week",
  },
];

export default function RecentProjects() {
  return (
    <Card className="mt-8">
      <CardContent className="p-6">
        <h2 className="text-xl font-bold mb-5">
          Recent Projects
        </h2>

        <div className="space-y-4">
          {projects.map((project, index) => (
            <div
              key={index}
              className="flex justify-between border-b pb-3"
            >
              <span>{project.title}</span>
              <span className="text-gray-500">
                {project.date}
              </span>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}