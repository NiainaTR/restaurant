import HeaderMenu from "@/components/HeaderMenu";
import SingleFoodMenu from "@/components/SingleFoodMenu";
import { FoodsContext } from "@/context/FoodsContext";
import { ToggleMenuContext } from "@/context/ToggleMenuContext";
import { useContext, useEffect, useState } from "react";

function Menu() {
  const [type , setType] = useState<string>("");
  const { isToggle , setIsToggle  } = useContext(ToggleMenuContext);

  useEffect(() => {
    setType("tous"); 
  } , [])
  
  useEffect(()=>{
    if(isToggle === true) setIsToggle(false);
  } , []);
  
  return (
    <div className="w-full h-screen">
      <div className="absolute top-0 left-0 z-[4] w-full h-[10vh]">
          <HeaderMenu
              type={type}
              setType={setType}
          />
      </div>
      <div className="imagecontainer w-full h-screen relative">
        <SingleFoodMenu
          type={type}
        />
      </div>
    </div>
  )
}

export default Menu;
