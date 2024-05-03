//importamos todas a nossas pages
import { Route, Routes } from "react-router-dom";

import { Home } from "../pages/Home/Home";
import { ShowDish } from "../pages/ShowDish";


export function AppRoutes(){
  return (
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/dish/:id" element={<ShowDish/>}/>
    </Routes>
  )

}