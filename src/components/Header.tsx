import ModeToggle from "@/components/mode-toggle"
import { Button } from "./ui/button"
import {ShoppingBag} from "lucide-react";
import LogoDark from "../assets/logo-miso-dark.png";
import LogoLight from "../assets/logo-miso-light.png";
import { useTheme } from "./theme-provider";
import ButtonMenu from "./ButtonMenu";

function Header() {
  
  const {theme} = useTheme();
  
  return (
    <div className="w-full h-24 flex items-center justify-between z-40">
        <section className="w-[30%]">
            <img src={theme === "light" ? LogoDark : LogoLight} alt="" className="w-14 mx-5"/>
        </section>
        <div 
            className="fixed top-5 right-5 w-[250px] h-[50px] bg-white rounded-xl flex items-center justify-evenly z-40" 
        >
            <ButtonMenu></ButtonMenu>
            <Button className="bg-transparent text-black hover:bg-transparent"><ShoppingBag /></Button>
            <ModeToggle></ModeToggle>           
        </div>
    </div>
  )
}

export default Header
