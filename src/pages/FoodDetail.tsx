import Header from '@/components/Header';
import SingleFoodView from '@/components/SingleFoodView';
import { FoodsContext } from '@/context/FoodsContext';
import { FoodType } from '@/type/FoodType';
import { useContext, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom'

function FoodDetail() {
    const {id} = useParams();
    const {foods , isLoading , error} = useContext(FoodsContext);
    const [food , setFood] = useState<FoodType | undefined>();

    useEffect(() => {
        id ? setFood(foods.find(food => food.id === parseInt(id))) : setFood(undefined)
    } , [id , foods]);

    if(isLoading) return <div>Loading...</div>

    if(error) return <div>Error.......</div>
    

    return (
    <div className="w-full h-screen">
        <div className="absolute top-0 left-0 z-[4] w-full h-[10vh]">
          <Header/>
        </div>
        <div className="imagecontainer w-full h-screen relative">
          <SingleFoodView
            food={food}
          />
        </div>
    </div>
  )
}

export default FoodDetail
