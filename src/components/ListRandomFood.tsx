import { FoodsContext } from "@/context/FoodsContext"
import { useContext, useRef } from "react"
import FoodCard from "./FoodCard";
import { FoodType } from "@/type/FoodType";
import gsap from "gsap";


function getRandomFoods(dishes:FoodType[] , desserts:FoodType[] , drinks:FoodType[]) : FoodType[]{
    const randomFoodTab = [...dishes , ...desserts , ...drinks];
    for(let i = randomFoodTab.length ; i > 0 ; i--){
        const j = Math.floor(Math.random() * (i+1));
        [randomFoodTab[i] , randomFoodTab[j]] = [randomFoodTab[j] , randomFoodTab[i]];
    }
    return randomFoodTab.slice(0 , 4);
}





function ListRandomFood() {
    const {dishes , desserts , drinks , isLoading , error} = useContext(FoodsContext);
    const randomFoods = getRandomFoods(dishes , desserts , drinks);

    const randomContainerRef = useRef(null);
    const cursorBallRef = useRef(null);

    const handleMouserEnterRandomContainer = () => {
        gsap.to(cursorBallRef.current  , {opacity:1 , scale:1});
    }
    const handleMouserLeaveRandomContainer = () => {
        gsap.to(cursorBallRef.current , {opacity:0 , scale:0});
    }
    const handleMouseMoveRandomContainer = (e:React.MouseEvent<HTMLDivElement, MouseEvent>) => {
        gsap.to(cursorBallRef.current , {
            left:e.clientX - 20,
            top:e.clientY + 50
        })
    }

   return (
    <div 
        className="w-full relative flex items-center justify-evenly flex-wrap px-[0.5vw] mt-[5vh]"
        ref={randomContainerRef}
        onMouseEnter={handleMouserEnterRandomContainer}
        onMouseLeave={handleMouserLeaveRandomContainer}
        onMouseMove={(e) => handleMouseMoveRandomContainer(e)}
    >
        <div 
            className="h-[250px] w-[250px] bg-customSalmon rounded-[50%] absolute top-0 left-0 opacity-0 scale-0 translate-x-[-50%] translate-y-[-50%]"
            ref={cursorBallRef}
        >
            
        </div>
        {
            randomFoods &&
            randomFoods.map((food , index) => {
                return (
                    <FoodCard
                        key={index}
                        foodId={food.id}
                        foodName={food.name}
                        foodType={food.type}
                        foodPrice={food.price}
                    />
                )
            })
        }
    </div>
)
}

export default ListRandomFood
