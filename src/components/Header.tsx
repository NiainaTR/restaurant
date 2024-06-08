import ModeToggle from "@/components/mode-toggle"
import { Button } from "./ui/button"
import {ShoppingCart} from "lucide-react";
import LogoDark from "../assets/logo-miso-dark.png";
import LogoLight from "../assets/logo-miso-light.png";
import { useTheme } from "./theme-provider";
import ButtonMenu from "./ButtonMenu";

function Header() {
  
  const {theme} = useTheme();
  
  return (
    <div className="w-full h-24 flex items-center justify-between">
        <section className="w-[30%] z-40">
            <img src={theme === "light" ? LogoDark : LogoLight} alt="" className="w-14 mx-5"/>
        </section>
        {
            /*
                <ul className="w-[60%] hidden lg:flex lg:items-center lg:justify-evenly">            
            <li><Link to="/">Accueil</Link></li>
            <li><Link to="/about"/>Menu</li>
            <li><Link to="/signin"/>Se connecter</li>
            <li><Link to="/contacts"/>Contacts</li>
            <li className="w-[200px] flex items-center justify-evenly">
                <Button className="bg-transparent hover:bg-transparent" style={{color:theme==="dark"?"white":"black"}}><ShoppingCart></ShoppingCart></Button>
                <ModeToggle></ModeToggle>           
            </li>
        </ul>
            */
        }
        
        <div 
            className="fixed top-5 right-5 w-[250px] h-[50px] bg-white rounded-xl flex items-center justify-evenly z-40" 
        >
            <ButtonMenu></ButtonMenu>
            <Button className="bg-transparent text-black hover:bg-transparent"><ShoppingCart></ShoppingCart></Button>
            <ModeToggle></ModeToggle>           
        </div>
    </div>
  )
}

export default Header
