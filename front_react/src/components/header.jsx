import { Typo } from "./build/typography";
import { NavLink } from "react-router-dom";
import logo from "../assets/logo.svg"

export const Header = () => {
  return (
    <>
      <header>
        <nav>
          <ul>
            <li>
              <img src={logo} alt="my logo image" />
            </li>
            <NavLink to="/SportSee-OCR/">
              <Typo variant="h3" balise="li" color="white">
                Accueil
              </Typo>
            </NavLink>
            <Typo variant="h3" balise="li" color="white">
              Profil
            </Typo>
            <Typo variant="h3" color="white">
              Réglage
            </Typo>
            <Typo variant="h3" color="white">
              Communauté
            </Typo>
          </ul>
        </nav>
      </header>
    </>
  );
};
