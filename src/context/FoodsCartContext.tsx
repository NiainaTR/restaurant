import { useFoodCart } from "@/hooks/useFoodCart";
import { createContext, ReactNode} from "react";
import { FoodCartItemType } from '@/type/FoodCartItemType';


type FoodCart = FoodCartItemType[];

type FoodCartContextType = {
    cartState:FoodCart;
    addFoodCart: (food: FoodCartItemType , id: number) => void;
    deleteFoodCart: (id: number) => void;
    incrementFoodNumberCart: (id: number) => void;
    decrementFoodNumberCart: (id: number) => void;
    clearCart: () => void;
}

export const FoodsCartContext = createContext<FoodCartContextType>({
    cartState: [],
    addFoodCart: () => {},
    deleteFoodCart: () => {},
    incrementFoodNumberCart: () => {},
    decrementFoodNumberCart: () => {},
    clearCart: () => {}
});

export const FoodsCartProvider = ({ children }: { children: ReactNode }) => {
    const {cartState , addFood , deleteFood , incrementFood , decrementFood , clearCart} = useFoodCart();

    return (
        <FoodsCartContext.Provider 
            value={{
                cartState: cartState,
                addFoodCart:addFood,
                deleteFoodCart:deleteFood,
                incrementFoodNumberCart:incrementFood,
                decrementFoodNumberCart:decrementFood,
                clearCart:clearCart
            }}
        >
            {children}
        </FoodsCartContext.Provider>       
    );
}
