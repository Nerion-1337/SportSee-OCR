import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import { Typo } from "../build/typography";

interface Props {
  data:
    | {
        day: number;
        sessionLength: number;
        dayString: string;
        value: number;
      }[]
    | null;
}

export const LineCharts = ({ data }: Props) => {
  if (data) {
    console.log(data)
    return (
      <article className="LineCharts">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart data={data}>
            <CartesianGrid
              strokeDasharray="0 0"
              horizontal={false}
              vertical={false}
            />
            <XAxis
              dataKey="day"
              tickLine={false}
              axisLine={false}
              tickMargin={20}
              tick={{
                fill: "rgba(255,255,255,0.6)",
                fontSize: "clamp(2px, calc((12 / 1440) * 100vw), 12px)",
              }}
            />
            <YAxis hide domain={["dataMin-10", "dataMax+20"]} />
            <Tooltip
              content={<CustomTooltip payload={data} />}
              animationEasing="ease-out"
              offset={1}
              wrapperStyle={{ outline: "none" }}
              cursor={false}
              //position={{ x: 0 }}
            />
            <Line
              type="natural"
              dataKey="sessionLength"
              stroke="url(#colorUv)"
              strokeWidth={2}
              activeDot={{
                stroke: "#FFF",
                strokeWidth: 4,
                r: 2,
              }}
              dot={false}
            />
            //dégradé de line
            <defs>
              <linearGradient id="colorUv" x1="0%" y1="0" x2="100%" y2="0">
                <stop offset="0%" stopColor="rgba(255, 255, 255, 0.3)" />
                <stop offset="20%" stopColor="rgba(255, 255, 255, 0.4)" />
                <stop offset="40%" stopColor="rgba(255, 255, 255, 0.5)" />
                <stop offset="60%" stopColor="rgba(255, 255, 255, 0.6)" />
                <stop offset="100%" stopColor="rgba(255, 255, 255, 1)" />
              </linearGradient>
            </defs>
          </LineChart>
        </ResponsiveContainer>
      </article>
    );
  }
  return null;
};

interface payloadProps {
  payload:
    | {
        value: number;
      }[]
    | null;
}

const CustomTooltip = ({ payload }: payloadProps) => {
  if (payload && payload.length && payload !== null) {
    return (
      <div className="custom-tooltip-line">
        <Typo
          variant="h8"
          color="black"
          balise="span"
        >{`${payload[0].value} min`}</Typo>
      </div>
    );
  }
  return null;
};
