import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Link } from "react-router-dom"
import Header from "@/components/Header"
import { ToggleMenuContext } from "@/context/ToggleMenuContext"
import { useContext, useEffect } from "react"
import {z} from "zod";
import {zodResolver} from "@hookform/resolvers/zod"
import { SubmitHandler, useForm } from 'react-hook-form';

const schema = z.object({
  email:z.string().email(),
  password:z.string().min(8),
})
;
type signupFormType = z.infer<typeof schema>;

function ErrorFormMessage({message} : {
  message:string | undefined
}){
  return <p className="text-red-600">
    {message}
  </p>
}

function Signup() {
    
  
  const {
      register,
      handleSubmit,
      setError,
      formState:{errors , isSubmitting}
    } = useForm<signupFormType>(
      {
        defaultValues:{
          email:"",
        },
        resolver:zodResolver(schema)
    }
  );    

  const onSubmit: SubmitHandler<signupFormType> = async (data) => { 
    console.log(data);
    try {
      const response = await fetch('/api/auth/signup' , {
        method:"POST",
        headers:{
          'Content-Type':'application/json',
        },
        body:JSON.stringify(data)
      });
  
      const dataResponse = await response.json();
      console.log(dataResponse);
    } catch (error) {
      setError('email' , {message:"This email is already taken."})
    }
  }
  

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
        <form className="mx-auto grid w-[350px] gap-6" onSubmit={handleSubmit(onSubmit)}>
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
                {...register("email")}
              />
              {
                errors.email && (<ErrorFormMessage message={errors.email.message}/>)
              }
              
            </div>
            <div className="grid gap-2">
              <div className="flex items-center">
                <Label htmlFor="password">Password</Label>
              </div>
              <Input
                  id="password" 
                  type="password" 
                  {...register("password")}   
              />
              {
              errors.password && (<ErrorFormMessage message={errors.password.message}/>)
              }
            </div>
            <Button disabled={isSubmitting} type="submit" className="w-full">
              {isSubmitting ? "Loading..." : "Sign up "}
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
        </form>
      </div>
    </div>
  )
}

export default Signup
