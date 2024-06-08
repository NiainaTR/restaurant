import { Routes , Route } from "react-router-dom"
import Home from "./pages/Home"
import Menu from "./pages/Menu"
import MenuWindow from "./components/MenuWindow"


function App() {

  return (
    <>
        <MenuWindow></MenuWindow>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/menu" element={<Menu/>}/>
        </Routes>    
    </>
  )
}

export default App
