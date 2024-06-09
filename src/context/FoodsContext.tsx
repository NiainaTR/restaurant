import { ReactNode, createContext, useEffect, useState } from "react";
import { FoodType } from "@/type/FoodType";
import useSWR from "swr";


type FetchDataType = {
    foods:FoodType[]
}


type FoodsContextType = {
    foods:FoodType[];
    isLoading:boolean;
    error:Error
}

export const FoodsContext = createContext<FoodsContextType>({
    foods:[],
    isLoading:false,
    error:new Error()
});

const fetcher = (url:string) => {
    return (
        fetch(url)
            .then((response) => response.json())
    );
}

export const FoodsProvider = ({children}  : {children : ReactNode}) => {
    const [foods , setFoods] = useState<FoodType[]>([]);
    const {data , isLoading , error} = useSWR<FetchDataType>('/data.json' , fetcher);

    useEffect(() => {
        if(data){
            setFoods(data.foods);
        }
    } , [data])
 
    return (
        <FoodsContext.Provider value={{foods , isLoading , error}}>
            {children}
        </FoodsContext.Provider>
    )
}


