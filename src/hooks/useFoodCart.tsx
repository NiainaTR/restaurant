import { FoodCartItemType } from '@/type/FoodCartItemType';
import { useEffect, useReducer } from 'react';

type CartActionType =
    | { type: 'ADD_FOOD'; payload: FoodCartItemType }
    | { type: 'DELETE_FOOD'; payload: { id: number } }
    | { type: 'INCREMENT_FOOD'; payload: { id: number } }
    | { type: 'DECREMENT_FOOD'; payload: { id: number } }
    | { type: 'DELETE_ALL' };

    const addFoodCart = (state: FoodCartItemType[] , food: FoodCartItemType): FoodCartItemType[] => {
    let foodItemFound = false;
    const newCartState = state.map(foodItem => {
        if (foodItem.id === food.id) {
            foodItemFound = true;
            return { ...foodItem, number: foodItem.number + 1 };
        }
        return foodItem;
    });
    if (!foodItemFound) newCartState.push({ ...food, number: 1 });
    return newCartState;
};

const deleteFoodCart = (state: FoodCartItemType[], id: number): FoodCartItemType[] =>
    state.filter(food => food.id !== id);

const incrementFoodNumberCart = (state: FoodCartItemType[], id: number): FoodCartItemType[] =>
    state.map(food => (food.id === id ? { ...food, number: food.number + 1 } : food));

const decrementFoodNumberCart = (state: FoodCartItemType[], id: number): FoodCartItemType[] =>
    state.flatMap(food => (food.id === id ? (food.number > 1 ? [{ ...food, number: food.number - 1 }] : []) : [food]));


const clearCart = (): FoodCartItemType[] => [];

const cartReducer = (state: FoodCartItemType[], action: CartActionType): FoodCartItemType[] => {
    switch (action.type) {
        case 'ADD_FOOD':
            return addFoodCart(state, action.payload);
        case 'DELETE_FOOD':
            return deleteFoodCart(state, action.payload.id);
        case 'INCREMENT_FOOD':
            return incrementFoodNumberCart(state, action.payload.id);
        case 'DECREMENT_FOOD':
            return decrementFoodNumberCart(state, action.payload.id);
        case 'DELETE_ALL':
            return clearCart();
        default:
            return state;
    }
};



export function useFoodCart() {
    const [cartState, dispatch] = useReducer(cartReducer, [], () => {
        const localStorageCart = localStorage.getItem('cart');
        return localStorageCart ? (JSON.parse(localStorageCart) as FoodCartItemType[]) : [];
    }); 

    useEffect(() => {
        localStorage.setItem('cart' , JSON.stringify(cartState));
    } , [cartState])
    
    return {
        cartState,
        addFood: (food: FoodCartItemType) => dispatch({ type: 'ADD_FOOD', payload: food }),
        deleteFood: (id: number) => dispatch({ type: 'DELETE_FOOD', payload: { id } }),
        incrementFood: (id: number) => dispatch({ type: 'INCREMENT_FOOD', payload: { id } }),
        decrementFood: (id: number) => dispatch({ type: 'DECREMENT_FOOD', payload: { id } }),
        clearCart: () => dispatch({ type: 'DELETE_ALL' }),
    };
}
