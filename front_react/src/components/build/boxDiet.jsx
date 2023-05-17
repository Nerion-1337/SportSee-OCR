import clsx from "clsx";
import { Typo } from "./typography";


export const BoxDiet = ( {name, img, data, className} ) => {
  const classStyles = "boxdiet";

  return (
    <article className={clsx(classStyles, className)}>
      <img src={img} alt="my logo image" />
      <div className="title">
        <Typo variant="h4" balise="span" color="C1">
          {data}
        </Typo>
        <Typo variant="h7" balise="span" color="C2">
          {name}
        </Typo>
      </div>
    </article>
  );
};
