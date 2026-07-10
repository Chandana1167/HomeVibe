import { Card, CardContent } from "./ui/card";

export default function StatsCard({ title, value, color = "from-pink-600 via-purple-600 to-indigo-600" }) {
  return (
    <Card className="rounded-[2rem] border border-white/40 bg-white/30 backdrop-blur-xl shadow-xl overflow-hidden hover:shadow-2xl transition-all duration-300">
      <CardContent className="p-6">
        <h3 className="text-slate-600 text-xs font-bold tracking-wider uppercase">
          {title}
        </h3>
        <h1 className={`text-5xl font-black mt-3 bg-gradient-to-r ${color} bg-clip-text text-transparent`}>
          {value}
        </h1>
      </CardContent>
    </Card>
  );
}