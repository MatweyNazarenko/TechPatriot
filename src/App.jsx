import { BrowserRouter, Route, Routes } from "react-router";
import MainPage from "./component/MainPage/MainPage"
import View3dPage from "./component/3dViewPage/View3dPage";
import AnimatedRoute from "./component/AllPages/AnimatedRoute"

const App = ()=>{
  return(
    <BrowserRouter>
      <AnimatedRoute></AnimatedRoute>
    </BrowserRouter>
  )
}

export default App;
