import { ReactNode, createContext } from "react";
import { FoodType } from "@/type/FoodType";


type FoodsContextType = {
    dishes:FoodType[];
    desserts:FoodType[];
    drinks:FoodType[]
}

export const FoodsContext = createContext<FoodsContextType>({
    dishes:[],
    desserts:[],
    drinks:[]
});



