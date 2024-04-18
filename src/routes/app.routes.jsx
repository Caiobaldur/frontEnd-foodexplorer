//importamos todas a nossas pages
import { Route, Routes } from "react-router-dom";

import { Login } from "../pages/Login/Login";
import { Home } from "../pages/Home/Home";

export function AppRoutes(){
  return (
    <Routes>
      <Route path="/" element={<Login/>}/>
      <Route path="/Home" element={<Home/>}/>
    </Routes>
  )

}