import {
    Drawer,
    DrawerClose,
    DrawerContent,
    DrawerFooter,
    DrawerHeader,
    DrawerTrigger,
} from "@/components/ui/drawer"
import { Button } from "./ui/button"
import { Textarea } from "./ui/textarea"
import { Label } from "./ui/label"
import { Lock, MessageCircle, X } from "lucide-react"
import { Link } from "react-router-dom"
  
const isConnected = false;


function CommentCustom() {
  return (
    <div className="w-[60px] h-[50px] flex items-center justify-center">
      <Drawer>
        <DrawerTrigger className="flex flex-col items-center justify-evenly">
            <MessageCircle className="text-white" />
            <p className="text-white mt-2">12.6K</p>
        </DrawerTrigger>
        <DrawerContent>
            <DrawerHeader>
                <DrawerClose className="absolute top-5 right-4">
                    <Button variant="outline"><X /></Button>
                </DrawerClose>    
            </DrawerHeader>
            {
                isConnected ? (<div className="relative flex h-full min-h-[50vh] flex-col rounded-xl bg-muted/50 p-4 lg:col-span-2">
                  <div className="flex-1" />
                  <form
                    className="relative overflow-hidden rounded-lg border bg-background focus-within:ring-1 focus-within:ring-ring" x-chunk="dashboard-03-chunk-1"
                  >
                    <Label htmlFor="message" className="sr-only">
                      Message
                    </Label>
                    <Textarea
                      id="message"
                      placeholder="Ecrivez votre commentaire..."
                      className="min-h-12 resize-none border-0 p-3 shadow-none focus-visible:ring-0"
                    />
                    <div className="flex items-center p-3 pt-0">
                      
                      <Button type="submit" size="sm" className="ml-auto gap-1.5">
                        Send Message
                      </Button>
                    </div>
                  </form>
                </div>):
                (<div className="w-full h-[30vh] flex flex-col items-center justify-center">
                    <div className="text-2xl lg:text-4xl font-sans font-semibold p-6 lg:p-1 flex items-center"> <Lock className="m-4 w-10 h-10"/> 
                    <p>Veuillez vous connectez pour voir les commentaires</p></div>
                    <Link to="/seconnecter" className="p-3 m-3 underline">Se connecter</Link>
                </div>)  
            }
            <DrawerFooter>
            </DrawerFooter>
        </DrawerContent>
        </Drawer>
    </div>
  )
}

export default CommentCustom
