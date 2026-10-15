import { BrowserRouter, Route, Routes } from "react-router";
import MainPage from "./component/MainPage/MainPage"
import View3dPage from "./component/3dViewPage/View3dPage";
import AnimatedRoute from "./component/AllPages/AnimatedRoute"
import ToHome from "./component/AllPages/ToHome";
import { CardProvider, CardContext } from './context/CardContext';
import { useContext } from "react";
const App = () => {

  const ContentItem = () => {
    
    const { selectedId } = useContext(CardContext);


    return (
      <>
        {!selectedId && <ToHome></ToHome>}
        <AnimatedRoute></AnimatedRoute>
      </>
    )
  }

  return (
    <BrowserRouter>
      <CardProvider>
        <ContentItem></ContentItem>
      </CardProvider>
    </BrowserRouter>
  )
}

export default App;
