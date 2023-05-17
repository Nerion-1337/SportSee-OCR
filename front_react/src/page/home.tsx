import { Main } from "../components/build/main";
import { Button } from "../components/build/button";
import { NavLink } from "react-router-dom";

export default function Home() {
  return (
    <>
      <Main className="home">
        <NavLink to="/SportSee-OCR/profil/12">
          <Button>Karl</Button>
        </NavLink>
        <NavLink to="/SportSee-OCR/profil/18">
          <Button>Cecilia</Button>
        </NavLink>
      </Main>
    </>
  );
}
