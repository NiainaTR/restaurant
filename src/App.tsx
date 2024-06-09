import { Routes , Route } from "react-router-dom"
import Home from "./pages/Home"
import Menu from "./pages/Menu"
import MenuWindow from "./components/MenuWindow"
import FoodDetail from "./pages/FoodDetail"
import NotFound from "./pages/NotFound"
import { Login } from "./pages/login"


function App() {

  return (
    <>
        <MenuWindow></MenuWindow>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/menu" element={<Menu/>}/>
          <Route path="/food/:id" element={<FoodDetail/>}/>
          <Route path="/seconnecter" element={<Login/>}/>
          <Route path="/*" element={<NotFound/>}/>
        </Routes>    
    </>
  )
}

export default App
