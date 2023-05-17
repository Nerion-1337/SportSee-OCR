import clsx from "clsx";
import Image from "next/image";

interface Props {
  name: string;
  img: string;
  data: string;
  className?: string;
}

export const BoxDiet = ({ name, img, data, className }: Props) => {
  let classStyles: string =
    "w-boxdiet h-boxdiet bg-c1 text-black flex items-center  gap-boxdiet";
  console.log(img);
  return (
    <article className={clsx(classStyles, className)}>
      <Image
        src={img}
        alt="my logo image"
        className="w-icon2 h-icon2 ml-boxdiet"
        width={0}
        height={0}
      />
      <div className="flex flex-col">
        <span className="text-4xl">{data}</span>
        <span className="text-6xl">{name}</span>
      </div>
    </article>
  );
};
