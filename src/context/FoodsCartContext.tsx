import { createContext, ReactNode, useState, useEffect } from "react";

type FoodCartType = {
    id: number, 
    type: string,
    name: string,
    price: number,
}

type CartType = {
    id: number, 
    type: string,
    name: string,
    price: number,
    number:number
}

type FoodCartContextType = {
    cartState: CartType[];
    setCartState: React.Dispatch<React.SetStateAction<CartType[]>>;
    addFoodCart: (food: FoodCartType, id: number) => void;
    deleteFoodCart: (id: number) => void;
    incrementFoodNumberCart: (id: number) => void;
    decrementFoodNumberCart: (id: number) => void;
    clearCart: () => void;
}

export const FoodsCartContext = createContext<FoodCartContextType>({
    cartState: [],
    setCartState: () => {},
    addFoodCart: () => {},
    deleteFoodCart: () => {},
    incrementFoodNumberCart: () => {},
    decrementFoodNumberCart: () => {},
    clearCart: () => {}
});

export const FoodsCartProvider = ({ children }: { children: ReactNode }) => {
    const [cartState, setCartState] = useState<CartType[]>(() => {
        const storedCart = localStorage.getItem("cartState");
        return storedCart ? JSON.parse(storedCart) : [];
    });

    useEffect(() => {
        localStorage.setItem("cartState", JSON.stringify(cartState));
    }, [cartState]);

    const addFoodCart = (food: FoodCartType, id: number) => {
        const newFood: CartType = { ...food, number: 1 };
        let foodItemFound = false;
        const newCartState = cartState.map(cartItem => {
            if (cartItem.id === id) {
                foodItemFound = true;
                return { ...cartItem, number: cartItem.number + 1 };
            }
            return cartItem;
        });
        if (!foodItemFound) newCartState.push(newFood);
        setCartState(newCartState);
    }

    const deleteFoodCart = (id: number) => {
        setCartState(cartState.filter(food => food.id !== id));
    }

    const incrementFoodNumberCart = (id: number) => {
        setCartState(cartState.map(food => food.id === id ? { ...food, number: food.number + 1 } : food));
    }

    const decrementFoodNumberCart = (id: number) => {
        setCartState(cartState.flatMap(food => 
            food.id === id ? (food.number > 1 ? [{ ...food, number: food.number - 1 }] : []) : [food]
        ));
    }

    const clearCart = () => setCartState([]);

    return (
        <FoodsCartContext.Provider 
            value={{
                cartState,
                setCartState,
                addFoodCart,
                deleteFoodCart,
                incrementFoodNumberCart,
                decrementFoodNumberCart,
                clearCart,
            }}
        >
            {children}
        </FoodsCartContext.Provider>       
    );
}
