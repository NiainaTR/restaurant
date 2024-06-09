import { useContext } from "react"
import { Button } from "./ui/button";
import { ShoppingBag, X } from "lucide-react";
import { ToggleMenuContext } from "@/context/ToggleMenuContext";
import { FoodsCartContext } from "@/context/FoodsCartContext";

function ButtonCartWindow() {
const {cartState} = useContext(FoodsCartContext);
  
  const {isToggleCart , setIsToggleCart} = useContext(ToggleMenuContext);
  
  return (
    <Button 
        className="bg-transparent text-black hover:bg-transparent relative overflow-hidden"
        onClick={() => setIsToggleCart(!isToggleCart)}
    >
        {cartState.length>0 ? (<span className={`${isToggleCart ? 'hidden' : 'block'} w-3 h-3 z-50 bg-red-500 absolute top-2 right-1 rounded-full`}></span>):<></>}
        <ShoppingBag className={`absolute ${isToggleCart ? 'translate-y-[-31px]' : 'translate-y-[0px]'} transition-transform duration-200 ease-out will-change-transform`}/>
        <X  className={`absolute ${isToggleCart ? 'translate-y-[0px]' : 'translate-y-[31px]'} transition-transform duration-200 ease-out will-change-transform`}/>
    </Button>        
  )
}

export default ButtonCartWindow
