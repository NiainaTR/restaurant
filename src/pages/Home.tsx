import Header from "@/components/Header";
import Hero from "@/components/Hero";
import ListRandomFood from "@/components/ListRandomFood";
import { ToggleMenuContext } from "@/context/ToggleMenuContext";
import { useContext, useEffect } from "react";

function Home() {
  const { isToggle , setIsToggle } = useContext(ToggleMenuContext);
  
  useEffect(()=>{
    if(isToggle === true) setIsToggle(false);
  } , []);

  return (
    <div>
      <Header></Header>
      <Hero></Hero>
      <ListRandomFood></ListRandomFood>
    </div>
  )
}

export default Home;
