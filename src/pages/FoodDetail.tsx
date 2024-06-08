import Header from '@/components/Header';
import SingleFoodView from '@/components/SingleFoodView';
import { useParams } from 'react-router-dom'

function FoodDetail() {
    const {id} = useParams();
    
    return (
    <div className="w-full h-screen">
        <div className="absolute top-0 left-0 z-[4] w-full h-[10vh]">
          <Header/>
        </div>
        <div className="imagecontainer w-full h-screen relative">
          <SingleFoodView 
            id={Number(id)}
          />
        </div>
    </div>
  )
}

export default FoodDetail
