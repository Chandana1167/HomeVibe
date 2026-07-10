import { ResponsiveContainer, LineChart, Line, XAxis, YAxis, Tooltip } from "recharts";

const data = [
  { month: "Jan", designs: 5 },
  { month: "Feb", designs: 8 },
  { month: "Mar", designs: 12 },
  { month: "Apr", designs: 15 },
  { month: "May", designs: 18 },
  { month: "Jun", designs: 22 },
];

export default function AnalyticsChart() {
  return (
    <div className="bg-white/30 backdrop-blur-xl border border-white/40 rounded-[2rem] shadow-xl p-6 h-80 tracking-wide">
      <h2 className="text-xl font-black bg-gradient-to-r from-purple-950 to-indigo-950 bg-clip-text text-transparent mb-6">
        AI Design Analytics
      </h2>

      <ResponsiveContainer width="100%" height="80%">
        <LineChart data={data}>
          <XAxis dataKey="month" stroke="#4b5563" fontSize={11} tickLine={false} axisLine={false} />
          <YAxis stroke="#4b5563" fontSize={11} tickLine={false} axisLine={false} />
          <Tooltip 
            contentStyle={{ 
              backgroundColor: 'rgba(255, 255, 255, 0.6)', 
              backdropFilter: 'blur(12px)',
              borderRadius: '1.25rem', 
              border: '1px solid rgba(255,255,255,0.4)',
              boxShadow: '0 10px 15px -3px rgba(0,0,0,0.05)'
            }} 
          />

          <Line
            type="monotone"
            dataKey="designs"
            stroke="url(#chartLineGradient)"
            strokeWidth={4}
            dot={{ r: 5, fill: "#a855f7", strokeWidth: 0 }}
            activeDot={{ r: 7 }}
          />
          <defs>
            <linearGradient id="chartLineGradient" x1="0" y1="0" x2="1" y2="0">
              <stop offset="0%" stopColor="#ec4899" />
              <stop offset="50%" stopColor="#a855f7" />
              <stop offset="100%" stopColor="#6366f1" />
            </linearGradient>
          </defs>
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}