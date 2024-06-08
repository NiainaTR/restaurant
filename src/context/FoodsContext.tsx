import { ReactNode, createContext, useEffect, useState } from "react";
import { FoodType } from "@/type/FoodType";
import useSWR from "swr";


type AllFoodsType = {
    dishes:FoodType[];
    desserts:FoodType[];
    drinks:FoodType[]    
}


type FoodsContextType = {
    dishes:FoodType[];
    desserts:FoodType[];
    drinks:FoodType[];
    isLoading:boolean;
    error:Error
}

export const FoodsContext = createContext<FoodsContextType>({
    dishes:[],
    desserts:[],
    drinks:[],
    isLoading:false,
    error:new Error()
});

const fetcher = (url:string) => {
    return (
        fetch(url)
            .then((response) => response.json())
    );
}

export  const FoodsProvider = ({children}  : {children : ReactNode}) => {
    const [dishes , setDishes] = useState<FoodType[]>([]);
    const [desserts , setDesserts] = useState<FoodType[]>([]);
    const [drinks , setDrinks] = useState<FoodType[]>([]);
    
    const {data , isLoading , error} = useSWR<AllFoodsType>('/data.json' , fetcher);

    useEffect(() => {
        if(data){
            console.log(data);
            setDishes(data.dishes);
            setDesserts(data.desserts);
            setDrinks(data.drinks);
        }
    } , [data])
 
    return (
        <FoodsContext.Provider value={{dishes , desserts , drinks , isLoading , error}}>
            {children}
        </FoodsContext.Provider>
    )
}


