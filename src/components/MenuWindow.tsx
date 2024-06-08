import { ToggleMenuContext } from "@/context/ToggleMenuContext";
import { useContext } from "react";
import { useTheme } from "./theme-provider";
import { Link } from "react-router-dom";
import Header from "./Header";

function MenuWindow() {
  const { isToggle } = useContext(ToggleMenuContext);
  const { theme } = useTheme();

  return isToggle ? (
    <div
      className="w-full h-screen fixed top-0 left-0  flex transition-all duration-100 ease-in-out will-change-transform z-50"
      style={{ backgroundColor: theme === "dark" ? "#000" : "white" }}
    >
      <Header></Header>
      <div
        className="fixed top-0 left-0 w-full h-screen gap-4 flex flex-col items-end justify-center"
      >
        <div className="flex cursor-pointer">
            <p
              className="relative text-center text-[10vw] md:text-[5vw] lg:text-[5vw] leading-[90%] will-change-transform transition-letter-spacing duration-700 hover:tracking-[0.075em] uppercase"
            >
              <Link to="/">Accueil</Link>
            </p>
          </div>
        {["Menu", "A propos" , "Se connecter",  "Contacts"].map((text, index) => (
          <div className="flex cursor-pointer" key={index}>
            <p
              className="relative text-center text-[10vw] md:text-[5vw] lg:text-[5vw] leading-[90%] will-change-transform transition-letter-spacing duration-700 hover:tracking-[0.075em] uppercase"
            >
              <Link to={`/${text}`}>{text}</Link>
            </p>
          </div>
        ))}
      </div>
    </div>
  ) : null;
}

export default MenuWindow;
