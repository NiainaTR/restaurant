import ModeToggle from "@/components/mode-toggle"
import LogoDark from "../assets/logo-miso-dark.png";
import LogoLight from "../assets/logo-miso-light.png";
import { useTheme } from "./theme-provider";
import ButtonMenu from "./ButtonMenu";
import ButtonCartWindow from "./ButtonCartWindow";

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
            <ButtonMenu/>
            <ButtonCartWindow/>
            <ModeToggle></ModeToggle>           
        </div>
    </div>
  )
}

export default Header
