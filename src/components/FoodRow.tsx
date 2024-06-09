import { Minus, Plus, X } from 'lucide-react'
import { Button } from './ui/button'
import { TableCell, TableRow } from './ui/table'
import { useContext } from 'react';
import { FoodsCartContext } from '@/context/FoodsCartContext';

function FoodRow({id , name , price , number} : {id : number , name :string , price : number ,  number : number}) {
    const {incrementFoodNumberCart , decrementFoodNumberCart , deleteFoodCart} = useContext(FoodsCartContext);
    
    let total = price * number;
    
    return (
    <TableRow>
    <TableCell className="font-medium">
        {name}
    </TableCell>
    <TableCell className="">
        {price}
    </TableCell>
    <TableCell className="relative w-[400px]">
        <div className='w-full h-full absolute top-0 left-0 flex items-center justify-center'>
            <div className='w-[60%] h-[50%] flex md:flex-row lg:flex-row items-center space-x-2'>
                <Button
                    onClick={()=>decrementFoodNumberCart(id)}
                ><Minus></Minus></Button>
                <p className='p-3'>{number}</p>
                <Button
                    onClick={() => incrementFoodNumberCart(id)}
                ><Plus></Plus></Button>
            </div>
        </div>
    </TableCell>
    <TableCell className="hidden md:table-cell">
        {total}
    </TableCell>
    <TableCell className="hidden md:table-cell">
        <Button 
            onClick={() => deleteFoodCart(id)}
            className='outline hover:bg-red-500'
        ><X></X></Button>
    </TableCell>
    </TableRow>
  )
}

export default FoodRow
