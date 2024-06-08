import { useContext } from "react";
import { ToggleMenuContext } from "@/context/ToggleMenuContext";

function ButtonMenu() {
  const {isToggle , setIsToggle} = useContext(ToggleMenuContext); 
  return (
    <button
        onClick={() => setIsToggle(!isToggle)}
        className="w-7 h-3 flex flex-col items-center justify-between transition-all duration-250 ease-out"
    >
        <span className="w-[100%] h-1  bg-black transition-all duration-250 ease-out will-change-transform rounded-sm"
            style={{transform:isToggle === false ? "translateY(0) rotate(0)" : "translateY(4px) rotate(45deg)"}}
        ></span>
        <span className="w-[100%] h-1 bg-black transition-all duration-250 ease-out will-change-transform rounded-sm"
            style={{transform:isToggle === false ? "translateY(0) rotate(0)" : "translateY(-4px) rotate(-45deg)"}}    
        ></span>
    </button>  
)
}

export default ButtonMenu
