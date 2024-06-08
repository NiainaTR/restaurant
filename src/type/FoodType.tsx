export type FoodType = {
    id:number, 
    type:"dishes" | "desserts" | "drinks",
    name:string,
    price:number,
    description:string,
    ingredients:{}
    likes?:number,
    comments?:{}
}