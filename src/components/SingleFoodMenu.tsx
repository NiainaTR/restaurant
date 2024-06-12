import { ArrowDownToDot, ShoppingBag, Soup } from "lucide-react"
import CommentCustom from "./CommentCustom"
import HeartCustom from "./HeartCustom"
import { Button } from "./ui/button"
import {useContext, useEffect, useState } from "react";
import { FoodType } from "@/type/FoodType";
import { FoodsContext } from "@/context/FoodsContext";
import { FoodsCartContext } from "@/context/FoodsCartContext";

function SingleFoodMenu({type} : {type : string}) {
    const {foods , isLoading , error} = useContext(FoodsContext);

    const {addFoodCart} = useContext(FoodsCartContext);
    
    const [tabFoods , setTabFoods] = useState<FoodType[]>([]); 

    const [food , setFood] = useState<FoodType>({
        id:1, 
        type:"dishes",
        name:"",
        price:1,
        description:"",
        ingredients:{},
        likes:300,
    }); 
    
    useEffect(() => {
        if(type !== "tous"){
            const tab = foods.filter((food) => food.type === type)    
            setTabFoods(tab);
            setFood(tab[0]);
        }
        else{
            setTabFoods(foods);
            setFood(foods[0]);
        }        
    } , [type])

    
    if(type === undefined) return (<div>Menu introuvable</div>)

    const handleNextFood = () => {
        const currentId = tabFoods.indexOf(food);
        const nextId = currentId + 1 === tabFoods.length ? 0 : currentId + 1;
        setFood(tabFoods[nextId]);
    }

   if(isLoading) return (
    <div className="maincard z-[3] w-full absolute h-screen flex items-center justify-center">
        <div className="w-full md:w-[50vw] lg:w-[40vw] h-[100vh] absolute bg-black/20">
            <div className="w-full h-full flex items-center bg-black/40 justify-center">
                <p>Loading...</p>
            </div>
        </div>
    </div>
   )

   if(error) return (
    <div className="maincard z-[3] w-full absolute h-screen flex items-center justify-center">
    <div className="w-full md:w-[50vw] lg:w-[40vw] h-[100vh] absolute bg-black/20">
        <div className="w-full h-full flex items-center bg-black/40 justify-center">
            <p>Error...</p>
        </div>
    </div>
    </div>
   )
   return (
    <>
        {
            food &&
            (
                <div className="maincard z-[3] w-full absolute h-screen flex items-center justify-center">
                <div className="w-full md:w-[50vw] lg:w-[40vw] h-[100vh] absolute bg-black/20">
                <div className="w-full h-full flex items-center bg-black/40 justify-center">
                    <div className="w-full h-[50%] relative mb-12">
                        <div className="absolute right-5 h-full w-[60px] flex flex-col items-center justify-around rounded-sm">
                            <HeartCustom likes={food.likes ? food.likes : 0} />
                            <CommentCustom />
                            <Button 
                                onClick={() => addFoodCart({
                                    id: food.id, 
                                    type: food.type,
                                    name: food.name,
                                    price: food.price,
                                    number:0
                                } , food.id)}
                                className="w-[80px] h-[100px] mt-4 bg-red-500 rounded-xl text-white flex flex-col hover:bg-red-500 hover:scale-[1.1] transition-all duration-100 ease-in-out"
                            >
                                <ShoppingBag />
                                <p>Ajouter</p>
                            </Button>
                        </div>
                        <div className="absolute left-5 h-full w-[70%] flex flex-col items-start mt-[10vh] text-white">
                            <p className="text-4xl lg:text-5xl mt-8 mx-2 uppercase font-medium text-wrap">{food.name}</p>
                            <div className="flex gap-3 mt-6 mx-3 bg-white/40 px-5 py-2 rounded-full">
                                <Soup />
                            <h3 className="text-xl tracking-tighter">{food.type}</h3>
                            </div>
                            <p className="text-3xl mt-3 mx-2 uppercase font-medium">{food.price} Ariary</p>
                            <p className="text-xl mt-3 mx-2 font-normal">{food.description}</p>
                       </div>
                        <div className="absolute bottom-[-25vh] w-full h-[20vh]  flex items-center justify-center">
                            <Button 
                                className="w-[70px] h-[70px] bg-white hover:bg-white text-black group rounded-[100%]"
                                onClick={handleNextFood}
                            >
                            <ArrowDownToDot className="w-10 h-10 group-hover:scale-[1.2] transition-all duration-100 ease-in-out"/>
                            </Button>
                        </div>
                    </div>
                </div>
            </div>
            <img src={`../${food.id}.jpg`} alt="" className="w-full md:w-[50vw] lg:w-[40vw] h-[100vh] object-cover" />
            </div>
            )
        }
      </>  
    )    
}

export default SingleFoodMenu
