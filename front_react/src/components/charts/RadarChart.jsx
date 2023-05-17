import {
  Radar,
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  PolarRadiusAxis,
  ResponsiveContainer,
} from "recharts";


export const RadarCharts = ( {data} ) => {
  if (data) {
    
    return (
      <article className="RadarCharts">
        <ResponsiveContainer width="100%" height="100%">
          <RadarChart cx="50%" cy="50%" outerRadius="65%" data={data}>
            <PolarGrid
              stroke="#FFFFFF"
              polarRadius={[0, 10, 20, 40, 62]}
              radialLines={false}
            />
            <PolarAngleAxis
              dataKey="kind"
              stroke="#FFFFFF"
              tickLine={false}
              domain={[
                "intensity",
                "speed",
                "strength",
                "endurance",
                "energy",
                "cardio",
              ]}
              dy={3}
            />
            <PolarRadiusAxis angle={30} tick={false} axisLine={false} />
            <Radar
              name="Mike"
              dataKey="value"
              stroke="#FF0101"
              fill="#FF0101"
              fillOpacity={0.7}
            />
          </RadarChart>
        </ResponsiveContainer>
      </article>
    );
  }
  return null;
};
