import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Main } from "../components/build/main";
import { BoxDiet } from "../components/build/boxDiet";
import { Typo } from "../components/build/typography";
import { Data_id } from "../api/fetch";
import calorie from "../assets/calorie.svg";
import prot from "../assets/prot.svg";
import gluc from "../assets/gluc.svg";
import lip from "../assets/lip.svg";
import { BarCharts } from "../components/charts/BarChart";
import { LineCharts } from "../components/charts/LineChart";
import { RadarCharts } from "../components/charts/RadarChart";
import { RadialBarCharts } from "../components/charts/RadialBarChart";
import {Standard} from "../api/standard";
import {Loader} from "../components/loader";

export default function Dashbord() {
  //
  const {id} = useParams();
  //
  //
  const [data, setData] = useState(null);
  //
  //
  useEffect(() => {
    const fetchData = async () => {
      if (id) {
        const result = await Data_id(id);       
        setData( new Standard(result).standardfunction());
      }
    };
    fetchData();
  }, [id]);
  //
  //
  if (data) {
  //  
    const name = data[0].userInfos.firstName;
//
    return (
      <>
        <Main className="dashbord">
          <section className="title">
            <Typo variant="h1" balise="h1">
              Bonjour <span className="text-red">{name}</span>
            </Typo>
            <Typo variant="h5" balise="p" className="text1">
              Félicitation ! Vous avez explosé vos objectifs hier 👏
            </Typo>
          </section>

          <section className="barchart">
            <BarCharts data={data[1]} />
          </section>

          <section className="sec3">
            <LineCharts data={data[2]} />
            <RadarCharts data={data[3].data} />
            <RadialBarCharts data={data[0].todayScore} />
          </section>

          <aside className="sec4">
            <BoxDiet
              name="Calories"
              data={data[0].keyData.calorieCount + "kCal"}
              img={calorie}
            />
            <BoxDiet
              name="Proteines"
              data={data[0].keyData.proteinCount + "g"}
              img={prot}
            />
            <BoxDiet
              name="Glucides"
              data={data[0].keyData.carbohydrateCount + "g"}
              img={gluc}
            />
            <BoxDiet
              name="Lipides"
              data={data[0].keyData.lipidCount + "g"}
              img={lip}
            />
          </aside>
        </Main>
      </>
    );
  }
  return <Main><Loader/></Main>;
}
