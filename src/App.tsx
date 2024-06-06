import { Routes , Route } from "react-router-dom"
import Home from "./pages/Home"
import Menu from "./pages/Menu"
import { ThemeProvider } from "./components/theme-provider"


function App() {

  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/menu" element={<Menu/>}/>
      </Routes>          
    </ThemeProvider>
  )
}

export default App
