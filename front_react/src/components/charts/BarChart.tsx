import {
  BarChart,
  Bar,
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
        day: string;
        kilogram: number;
        calories: number;
        value: number;
      }[]
    | null;
}

export const BarCharts = ({ data }: Props) => {
  if (data) {
    return (
      <>
        <legend>
          <Typo variant="h6" balise="span" color="C1">
            Activité quotidienne
          </Typo>
          <ul>
            <Typo className="black" variant="h7" balise="li" color="C2">
              Poids (kg)
            </Typo>
            <Typo className="red" variant="h7" balise="li" color="C2">
              Calories brûlées (kCal)
            </Typo>
          </ul>
        </legend>
        <ResponsiveContainer width="100%" height="60%">
          <BarChart data={data}>
            <CartesianGrid
              strokeDasharray="2 2"
              horizontal={true}
              vertical={false}
            />
            <XAxis
              fill="#FF0101"
              dataKey="day"
              tickLine={false}
              axisLine={false}
              dy={15}
            />
            <YAxis orientation="right" tickLine={false} axisLine={false} />
            <Tooltip
              content={<CustomTooltip payload={data} />}
              animationEasing="ease-out"
              offset={40}
              wrapperStyle={{ outline: "none" }}
            />

            <Bar
              dataKey="kilogram"
              barSize={10}
              radius={[10, 10, 0, 0]}
              fill="#000000"
            />
            <Bar
              dataKey="calories"
              barSize={10}
              radius={[10, 10, 0, 0]}
              fill="#FF0101"
            />
          </BarChart>
        </ResponsiveContainer>
      </>
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
      <div className="custom-tooltip">
        <Typo
          variant="h8"
          color="white"
          balise="span"
        >{`${payload[0].value}kg`}</Typo>
        <Typo
          variant="h8"
          color="white"
          balise="span"
        >{`${payload[1].value}kcal`}</Typo>
      </div>
    );
  }
  return null;
};
