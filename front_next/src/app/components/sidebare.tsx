import Image from "next/image";
import { Typo } from "@/design-system/typography";

export const Sidebare = () => {
  return (
    <>
      <nav className="bg-black w-nav left-0 h-full flex flex-col items-center relative">
        <ul className="flex gap-nav flex-col mt-nav justify-center items-center w-100">
          <li>
            <Image
              src="../assets/yoga.svg"
              alt="my logo image"
              className="w-icon h-icon"
              width={0}
              height={0}
            />
          </li>
          <li>
            <Image
              src="../assets/swim.svg"
              alt="my logo image"
              className="w-icon h-icon"
              width={0}
              height={0}
            />
          </li>
          <li>
            <Image
              src="../assets/bike.svg"
              alt="my logo image"
              className="w-icon h-icon"
              width={0}
              height={0}
            />
          </li>
          <li>
            <Image
              src="../assets/gym.svg"
              alt="my logo image"
              className="w-icon h-icon"
              width={0}
              height={0}
            />
          </li>
        </ul>
        <Typo
          variant="small"
          balise="div"
          color="white"
          className="rotate-270 w-copy absolute index-10 bottom-0 mb-copy"
        >
          Copiryght, SportSee, 2020
        </Typo>
      </nav>
    </>
  );
};
