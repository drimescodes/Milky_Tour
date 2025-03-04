import "./App.css";
import { createBrowserRouter, RouterProvider, Route, createRoutesFromElements} from "react-router-dom";
import Hero from "./pages/Hero";

import Explore from "./pages/Explore";
import Venus from "./pages/Venus";
import Mars from "./pages/Mars";
import Uranus from './pages/Uranus';
import Mercury from './pages/Mercury';
import Jupiter from './pages/Jupiter';
import Neptune from './pages/Neptune';
import Pluto from './pages/Pluto';
import Saturn from './pages/Saturn';








function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <>
     
      <Route index element = {<Hero/>} />
      <Route path = "/venus" element = {<Venus/>} />
      <Route path = "/mercury" element = {<Mercury/>} />
      <Route path = "/mars" element = {<Mars/>} />

      <Route path = "/jupiter" element = {<Jupiter/>} />

      <Route path = "/saturn" element = {<Saturn/>} />

      <Route path = "/uranus" element = {<Uranus/>} />

      <Route path = "/neptune" element = {<Neptune/>} />

      <Route path = "/pluto" element = {<Pluto/>} />

      <Route path = "/explore" element = {<Explore/>} />




      </>
    )
  );
  return (
    <>
    <RouterProvider router={router}/>
    
    </>




  );
}



export default App;
