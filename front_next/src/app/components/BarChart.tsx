import React from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

/**
 * Function component for the radar chart
 * @param {any} data Data from the activity data
 * @returns {JSX.Element}
 */

const data = [
  {
    name: "Page A",
    uv: 4000,
    pv: 2400,
    amt: 2400,
  },
  {
    name: "Page B",
    uv: 3000,
    pv: 1398,
    amt: 2210,
  },
  {
    name: "Page C",
    uv: 2000,
    pv: 9800,
    amt: 2290,
  },
  {
    name: "Page D",
    uv: 2780,
    pv: 3908,
    amt: 2000,
  },
  {
    name: "Page E",
    uv: 1890,
    pv: 4800,
    amt: 2181,
  },
  {
    name: "Page F",
    uv: 2390,
    pv: 3800,
    amt: 2500,
  },
  {
    name: "Page G",
    uv: 3490,
    pv: 4300,
    amt: 2100,
  },
];

export default function BarCharts({ data }: any): JSX.Element | null {
  return (
    <ResponsiveContainer width="100%" height="100%">
      <BarChart data={data}>
        <CartesianGrid
          strokeDasharray="2 2"
          horizontal={true}
          vertical={false}
        />
        <XAxis dataKey="name" tickLine={false} axisLine={false} />
        <YAxis orientation="right" tickLine={false} axisLine={false} />
        <Tooltip />
        <Legend />
        <Bar dataKey="pv" barSize={20} fill="#8884d8" />
        <Bar dataKey="uv" barSize={20} fill="#82ca9d" />
      </BarChart>
    </ResponsiveContainer>
  );
}
