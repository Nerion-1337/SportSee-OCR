//React
import React, { useState, createContext, useContext } from "react";
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


//Components
//import BarsChart from "@/app/components/BarChart";
interface SidebarContextType {
  initialRenderComplete: boolean;
}
//
const SidebarContext = createContext<SidebarContextType>({} as SidebarContextType);
/**
 * Function component to display the correct chart depending on its type
 * @param {any} data
 * @returns {JSX.Element}
 */
export default function Chart({
  chartType,
  chartData,
}: {
  chartType: string;
  chartData: any;
}): JSX.Element | null {

  const [initialRenderComplete, setInitialRenderComplete] = useState<boolean>(false);


  //Variable containing the actual chart
  let renderChart: any = null;

  switch (chartType) {
    case "bar": {
      renderChart = <SidebarContext.Provider value={{ initialRenderComplete }}><BarCharts data={chartData} /></SidebarContext.Provider>;
      break;
    }
    case "line": {
      renderChart = " <LineChart data={chartData} />";
      break;
    }
    case "radar": {
      renderChart = "<RadarChart data={chartData} />";
      break;
    }
    case "gauge": {
      renderChart = "<GaugeChart data={chartData} />";
      break;
    }
    default: {
      break;
    }
  }

//   // This useEffect will only run once, during the first render to avoid UI hydration issues
//   useEffect(() => {
//     let{ initialRenderComplete } = useContext(SidebarContext)
//     //setInitialRenderComplete(true);
//   }, []);

//   if (!initialRenderComplete) {
//     return null;
//   }

   return <>{renderChart}</>;
 }

/**
 * Function component for the radar chart
 * @param {any} data Data from the activity data
 * @returns {JSX.Element}
 */

function BarCharts({ data }: any): JSX.Element | null {

  const { initialRenderComplete } = useContext(SidebarContext);

  if (!initialRenderComplete) {
    return null;
  }

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