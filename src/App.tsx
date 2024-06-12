import { Routes , Route } from "react-router-dom"
import Home from "./pages/Home"
import Menu from "./pages/Menu"
import MenuWindow from "./components/MenuWindow"
import FoodDetail from "./pages/FoodDetail"
import NotFound from "./pages/NotFound"
import Signup from "./pages/Signup"
import Login from "./pages/Login"
import CartWindow from "./components/CartWindow"
import Contacts from "./pages/Contacts"


function App() {
  console.log("render");
  return (
    <>
        <MenuWindow></MenuWindow>
        <CartWindow></CartWindow>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/menu" element={<Menu/>}/>
          <Route path="/food/:id" element={<FoodDetail/>}/>
          <Route path="/seconnecter" element={<Login/>}/>
          <Route path="/creercompte" element={<Signup/>}/>
          <Route path="/contacts" element={<Contacts/>}/>
          <Route path="/*" element={<NotFound/>}/>
        </Routes>    
    </>
  )
}

export default App
