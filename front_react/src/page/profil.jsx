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
import {userData, activityDataTerra, averageDataTerra, performanceDataTerra} from "../api/standard";
import {Loader} from "../components/loader";

export default function Dashbord() {
  //
  const {id} = useParams();
  //
  //
  const [user, setUser] = useState(null);
  //
  //
  const [activity, setActivity] = useState(null);
  //
  //
  const [average, setAverage] = useState(null);
  //
  //
  const [performance, setPerformance] = useState(null);
  //
  //
  useEffect(() => {
    const fetchData = async () => {
      if (id) {
        const result = await Data_id(id);
        setUser(userData(result.userData));
        setActivity(activityDataTerra(result.activityData.sessions));
        setAverage(averageDataTerra(result.averageData.sessions));
        setPerformance(performanceDataTerra(result.performanceData));
      }
    };
    fetchData();
  }, [id]);
  //
  //
  if (user && activity && average && performance) {
    
    const name = user.userInfos.firstName;

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
            <BarCharts data={activity} />
          </section>

          <section className="sec3">
            <LineCharts data={average} />
            <RadarCharts data={performance.data} />
            <RadialBarCharts data={user.todayScore} />
          </section>

          <aside className="sec4">
            <BoxDiet
              name="Calories"
              data={user.keyData.calorieCount + "kCal"}
              img={calorie}
            />
            <BoxDiet
              name="Proteines"
              data={user.keyData.proteinCount + "g"}
              img={prot}
            />
            <BoxDiet
              name="Glucides"
              data={user.keyData.carbohydrateCount + "g"}
              img={gluc}
            />
            <BoxDiet
              name="Lipides"
              data={user.keyData.lipidCount + "g"}
              img={lip}
            />
          </aside>
        </Main>
      </>
    );
  }
  return <Main><Loader/></Main>;
}
