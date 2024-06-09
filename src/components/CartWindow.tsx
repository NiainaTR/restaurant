import { useContext } from 'react'
import Header from './Header';
import { ToggleMenuContext } from '@/context/ToggleMenuContext';
import { useTheme } from './theme-provider';
import {
    Table,
    TableBody,
    TableHead,
    TableHeader,
    TableRow,
  } from "@/components/ui/table"
  import {
    Tabs,
    TabsContent,
  } from "@/components/ui/tabs"
  import {
    Card,
    CardContent,
    CardFooter,
    CardHeader,
    CardTitle,
  } from "@/components/ui/card"
import FoodRow from './FoodRow';
import { Button } from './ui/button';
import { FoodsCartContext } from '@/context/FoodsCartContext';
import { ShoppingBag } from 'lucide-react';

function CartWindow() {
    const { isToggleCart } = useContext(ToggleMenuContext);
    const { theme } = useTheme();
    
    const {cartState , clearCart} = useContext(FoodsCartContext);
    
    let totalPrice = cartState.reduce((acc , curr) => acc + (curr.price* curr.number) ,0);
    
    return isToggleCart ? (
      <div
        className="w-full h-screen fixed top-0 left-0  flex transition-all duration-100 ease-in-out will-change-transform z-50"
        style={{ backgroundColor: theme === "dark" ? "#000" : "white" }}
      >
        <Header></Header>
        <div className='w-full h-full absolute top-[-10px]'>
        {
            cartState.length > 0 ? (
                <Tabs defaultValue="all">
                <TabsContent value="all">
                <Card x-chunk="dashboard-06-chunk-0">
                    <CardHeader className='w-full flex items-start mt-[15vh]'>
                        <div>
                            <CardTitle>Prix total de mes achats :</CardTitle>
                            <p className='text-3xl font-sans font-medium m-4'>{totalPrice} Ariary</p>
                            <Button className='mt-3'>Valider</Button>
                            <Button 
                                onClick={() => clearCart()}
                                className='mt-3 mx-8 bg-red-500 hover:bg-red-600'
                            >Annuler</Button>
                        </div>
                    </CardHeader>
                    <CardContent>
                    <Table className='max-h-[70vh] overflow-scroll'>
                        <TableHeader>
                        <TableRow>
                            <TableHead className="w-[150px] sm:table-cell">Nom</TableHead>
                            <TableHead className="w-[100px] sm:table-cell">
                            Prix
                            </TableHead>
                            <TableHead className="md:table-cell">
                            Nombre
                            </TableHead>
                            <TableHead className="hidden md:table-cell">
                            Prix total
                            </TableHead>
                            <TableHead className="hidden w-[100px] sm:table-cell">
                            
                            </TableHead>
                        </TableRow>
                        </TableHeader>
                        <TableBody>
                            {
                                cartState.map((food) => {
                                    return (
                                        <FoodRow
                                            key={food.id}
                                            id={food.id}
                                            name={food.name}
                                            price={food.price}
                                            number={food.number}
                                        />
                                    )
                                })
                            }
                        </TableBody>
                    </Table>
                    </CardContent>
                    <CardFooter>
                    <div className="text-xs text-muted-foreground">
                    </div>
                    </CardFooter>
                </Card>
                </TabsContent>
            </Tabs>
            ):
            (<div className='w-full h-[30vh] absolute top-[35%] flex flex-col items-center justify-center'>
                <ShoppingBag className='w-[200px] h-[200px] mb-5'/>
                <p className='text-3xl md:text-4xl lg:text-5xl'>Votre panier est vide .</p>
            </div>)
        }
        </div>
      </div>
    ) : null;
}

export default CartWindow
