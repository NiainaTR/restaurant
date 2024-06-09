import HeartCustom from './HeartCustom';
import CommentCustom from './CommentCustom';
import { Button } from './ui/button';
import { ShoppingBag, Soup } from 'lucide-react';
import { FoodType } from '@/type/FoodType';
import { useContext } from 'react';
import { FoodsCartContext } from '@/context/FoodsCartContext';

function SingleFoodView({food}: { food: FoodType | undefined }) {        
    if(food === undefined) return <div className="maincard z-[3] w-full absolute h-screen flex items-center justify-center">Food introuvable</div>

    const {addFoodCart} = useContext(FoodsCartContext);
    
    const foodAdd = {
        id: food.id, 
        type: food.type,
        name: food.name,
        price: food.price,
    }
    return (
        <div className="maincard z-[3] w-full absolute h-screen flex items-center justify-center">
        <div className="w-full md:w-[50vw] lg:w-[40vw] h-[100vh] absolute bg-black/20">
            <div className="w-full h-full flex items-center bg-black/40 justify-center">
                <div className="w-full h-[50%] relative mb-12">
                    <div className="absolute right-5 h-full w-[60px] flex flex-col items-center justify-around rounded-sm">
                        <HeartCustom likes={food.likes ? food.likes : 0}/>
                        <CommentCustom />
                        <Button 
                            onClick={() => addFoodCart(foodAdd , foodAdd.id)}
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
                    </div>
                </div>
            </div>
            <img src={`../${food.id}.jpg`} alt={food.name} className="w-full md:w-[50vw] lg:w-[40vw] h-[100vh] object-cover" />
        </div>
    );
}

export default SingleFoodView;
