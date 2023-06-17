import { useState } from 'react'
import "bootstrap/dist/css/bootstrap.min.css"
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Home from "./Home";
import AjouterProduit from "./gestionProduit/AjouterProduit";
import AfficherDetails from "./gestionProduit/afficherDetails.jsx";
import NavBar from "./includes/NavBar.jsx";
import ModifierProduit from "./gestionProduit/ModifierProduit";

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <BrowserRouter>
        <div className="container">
          <NavBar/>
        </div>

        <Routes>
        <Route path={"/"} element={<Home/>}/>
        <Route path={"/ajouterProduit"} element={<AjouterProduit/>}/>
        <Route path={"/AfficherDetails/:ref"} element={<AfficherDetails/>}/>
        <Route path={"/modifierProduit/:ref"} element={<ModifierProduit/>}/>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
