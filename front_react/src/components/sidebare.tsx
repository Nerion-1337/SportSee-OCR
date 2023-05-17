import { Typo } from "./build/typography";
import yoga from "../assets/yoga.svg";
import swim from "../assets/swim.svg";
import bike from "../assets/bike.svg";
import gym from "../assets/gym.svg";

export const Sidebare = () => {
  return (
    <>
      <nav className="sidebare">
        <ul>
          <li>
            <img src={yoga} alt="my logo image" />
          </li>
          <li>
            <img src={swim} alt="my logo image" />
          </li>
          <li>
            <img src={bike} alt="my logo image" />
          </li>
          <li>
            <img src={gym} alt="my logo image" />
          </li>
        </ul>
        <Typo variant="h8" balise="div" color="white" className="copiryght">
          Copiryght, SportSee, 2020
        </Typo>
      </nav>
    </>
  );
};