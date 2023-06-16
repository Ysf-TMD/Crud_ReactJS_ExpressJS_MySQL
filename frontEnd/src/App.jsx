import { useState } from 'react'
import "bootstrap/dist/css/bootstrap.min.css"
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Home from "./Home";
import AjouterProduit from "./gestionProduit/AjouterProduit";

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <BrowserRouter>
        <Routes>
        <Route path={"/"} element={<Home/>}/>
        <Route path={"/ajouterProduit"} element={<AjouterProduit/>}/>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
