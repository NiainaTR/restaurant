import { Routes , Route } from "react-router-dom"
import Home from "./pages/Home"
import Menu from "./pages/Menu"
import MenuWindow from "./components/MenuWindow"
import FoodDetail from "./pages/FoodDetail"


function App() {

  return (
    <>
        <MenuWindow></MenuWindow>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/menu" element={<Menu/>}/>
          <Route path="/food/:id" element={<FoodDetail/>}/>
        </Routes>    
    </>
  )
}

export default App
