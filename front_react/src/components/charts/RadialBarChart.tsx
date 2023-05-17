import { RadialBar, RadialBarChart,  ResponsiveContainer, } from "recharts";
import { Typo } from "../build/typography";

interface Props {
  data?: number | null;
}

export const RadialBarCharts = ({ data }: Props) => {
  if (data) {
    const percentageValue = data * 100;
    const valueData = [{ value: data * 100 }];

    return (
      <article className="RadialBarCharts">
        <Typo variant="h6" balise="span" color="C1" className="score">
          Score
        </Typo>
        <Typo variant="h2" balise="p" color="black" className="pourcent">
          {percentageValue}%
          <Typo variant="h6" balise="span" color="C2" className="objectif">
            de votre objectif
          </Typo>
        </Typo>
        <ResponsiveContainer width="100%" height="100%">
        <RadialBarChart
          width={300}
          height={250}
          data={valueData}
          innerRadius="65%"
          outerRadius="80%"
          startAngle={90}
          endAngle={90 + (percentageValue * 360) / 100}
        >
          <RadialBar
            name="score"
            dataKey="value"
            stroke-linejoin="round"
            fill="#FF0000"
            cornerRadius={100}
          />
        </RadialBarChart>
        </ResponsiveContainer>
      </article>
    );
  }
  return null;
};
