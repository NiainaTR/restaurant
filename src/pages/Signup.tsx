import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Link } from "react-router-dom"
import Header from "@/components/Header"
import { ToggleMenuContext } from "@/context/ToggleMenuContext"
import { useContext, useEffect } from "react"

function Signup() {
  
    const { isToggle , setIsToggle  } = useContext(ToggleMenuContext);

    useEffect(()=>{
        if(isToggle === true) setIsToggle(false);
    } , []);

  return (
    <div className="w-full grid-cols-1 relative">
      <div className="absolute top-0 left-4">
        <Header></Header>
      </div>
      <div className="flex items-center justify-center py-24">
        <div className="mx-auto grid w-[350px] gap-6">
          <div className="grid gap-2 text-center">
            <h1 className="text-3xl font-bold">Créer un compte</h1>
            <p className="text-balance text-muted-foreground">
              Créer mon compte 
            </p>
          </div>
          <div className="grid gap-4">
            <div className="grid gap-2">
              <Label htmlFor="email">Email</Label>
              <Input
                id="email"
                type="email"
                placeholder="m@example.com"
                required
              />
            </div>
            <div className="grid gap-2">
              <div className="flex items-center">
                <Label htmlFor="password">Password</Label>
              </div>
              <Input id="password" type="password" required />
            </div>
            <Button type="submit" className="w-full">
              Créer mon compte
            </Button>
            <Button variant="outline" className="w-full">
              Créer un compte avec mon compte google
            </Button>
          </div>
          <div className="mt-4 text-center text-sm">
             J&apos;ai deja un compte?{" "}
            <Link to="/seconnecter" className="underline">
              Se connecter à mon compte
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Signup
