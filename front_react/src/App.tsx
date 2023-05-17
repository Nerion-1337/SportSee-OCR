import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Header } from "./components/header";
import { Sidebare } from "./components/sidebare";
import Home from "./page/home";
import Profil from "./page/profil";

function App() {


  return (
    <BrowserRouter>
     <Header/>
     <div className="frame">
     <Sidebare/>
      <Routes>
        <Route path="/SportSee-OCR/" element={< Home />} />
        <Route path="/SportSee-OCR/profil/:id" element={ < Profil />} />
      </Routes>
     </div>
    </BrowserRouter>
  )
}

export default App
