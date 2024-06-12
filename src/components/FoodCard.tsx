import { IceCreamBowl, ShoppingBag, Soup, Wine } from "lucide-react";
import { Button } from "./ui/button";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { FoodsCartContext } from "@/context/FoodsCartContext";
import { FoodCartItemType } from "@/type/FoodCartItemType";

function FoodCard({foodId , foodName , foodType , foodPrice} : {foodId:number , foodName:string ; foodType:string ; foodPrice:number})  {    
    const {addFoodCart} = useContext(FoodsCartContext);
    
    const food : FoodCartItemType = {
        id: foodId, 
        type: foodType,
        name: foodName,
        price: foodPrice,
        number:0
    }
    

    return (
        <div
            className="relative group cursor-pointer overflow-hidden duration-500 w-[80vw] md:w-[30vw] lg:w-[32vw] m-2 h-[70vh] lg:h-[60vh] text-gray-50 bg-transparent rounded-xl mt-[10vh]"
        >
            <Link to={`/food/${foodId}`} className="absolute w-full h-full bg-black/50"></Link>
            <img src={`./${foodId}.jpg`} alt="" className="w-full h-100 duration-500"/>
            <div className="absolute top-[40%] left-[20%] duration-500 group-hover:translate-y-[-10px]">     
                <p className="text-4xl">{foodName}</p>
                <div className="flex flex-col gap-5">
                    <div className="flex gap-3 mt-6 bg-white/30 px-5 py-2 rounded-full">
                        {
                            foodType === "dishes" ? 
                            <><Soup />
                            <h3 className="text-xl tracking-tighter">Plat</h3>
                            </> : foodType === "desserts" ? <><IceCreamBowl />
                            <h3 className="text-xl tracking-tighter">Dessert</h3>
                            </> : <><Wine />
                            <h3 className="text-xl tracking-tighter">Boisson</h3>
                            </>
                        }
                    </div>
                    <p className="text-2xl">{foodPrice} Ariary</p>
                </div>
            </div>
            <Button
                onClick={() => addFoodCart(food , foodId)}
                className="absolute w-14 h-14 top-[80%] right-[10%] bg-white hover:bg-customSalmon  transition-transform duration-500 group-hover:translate-y-[10%] flex flex-col items-center justify-center"
            >
                <ShoppingBag className="text-black"/>
            </Button>
        </div>
    )
}

export default FoodCard
