import {
    Select,
    SelectContent,
    SelectGroup,
    SelectItem,
    SelectLabel,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select"
  
import LogoDark from "../assets/logo-miso-dark.png";
import ButtonMenu from './ButtonMenu'
import ModeToggle from './mode-toggle'

import ButtonCartWindow from "./ButtonCartWindow";

function HeaderMenu({type , setType} : {type : string , setType : React.Dispatch<React.SetStateAction<string>>}) {  
  return (
    <div className="w-full h-24 flex items-center justify-between">
        <section className="w-[30%] mx-4 z-40">
        <Select
            defaultValue={type}
            onValueChange={(t) => setType(t)}
        >
          <SelectTrigger className="w-[160px] rounded-xl outline-none border-none">
            <img src={LogoDark} alt="" className="w-[10%]"/>
            <SelectValue placeholder="Type de menu" />
          </SelectTrigger>
          <SelectContent>
            <SelectGroup>
              <SelectLabel>Menu</SelectLabel>
              <SelectItem value="tous"><p className="uppercase">Tous</p></SelectItem>
              <SelectItem value="dishes"><p className="uppercase">Plats</p></SelectItem>
              <SelectItem value="desserts"><p className="uppercase">Desserts</p></SelectItem>
              <SelectItem value="drinks"><p className="uppercase">Boissons</p></SelectItem>
            </SelectGroup>
          </SelectContent>
        </Select>
        </section>    
        <div 
            className="fixed top-5 right-5 w-[160px] lg:w-[200px] h-[50px] bg-white rounded-xl flex items-center justify-evenly z-40 mt-1" 
        >
            <ButtonMenu/>
            <ButtonCartWindow/>
            <ModeToggle></ModeToggle>           
        </div>
    </div>
  )
}

export default HeaderMenu
