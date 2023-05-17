import { Main } from "@/app/components/main";
import { BoxDiet } from "@/app/components/boxDiet";
import { Typo } from "@/design-system/typography";
import { Data_id } from "@/api/fetch";
import  calorie  from "@/assets/calorie.svg"
import  prot  from "@/assets/prot.svg"
import  gluc  from "@/assets/gluc.svg"
import  lip  from "@/assets/lip.svg"


export default async function Dashbord({
  params,
  searchParams,
}: {
  params: { id: string };
  searchParams?: { [key: string]: string | string[] | undefined };
}) {
  const id = params?.id;
  const data = await Data_id({ id });


  if(data){
  const userData = data.userData
  const name = userData.userInfos.firstName;
  return (
    <>
      <Main className="main_1">

        <section className="sec1">
          <Typo variant="h1" balise="h1">
            Bonjour <span className="text-red">{name}</span>
          </Typo>
          <Typo variant="h5" balise="p" className="mt-s1">
            Félicitation ! Vous avez explosé vos objectifs hier 👏
          </Typo>
        </section>

        <section className="sec2 bg-red w-sec2 h-sec2 mt-sec2">
        </section> 

        <section className="sec3 bg-orange w-sec2 h-sec3 mt-sec3">
          test
        </section>

        <aside className="sec4 w-aside h-aside row-3 mt-sec2 ml-aside flex flex-col justify-between">
        <BoxDiet name="Calories" data={userData.keyData.calorieCount + "kCal"} img={calorie.src} />
        <BoxDiet name="Proteines" data={userData.keyData.proteinCount + "g"} img={prot.src} />
        <BoxDiet name="Glucides" data={userData.keyData.carbohydrateCount + "g"} img={gluc.src} />
        <BoxDiet name="Lipides" data={userData.keyData.lipidCount + "g"} img={lip.src} />
        </aside>

      </Main>
    </>
  );
}
}
