import { Moon, Sun } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useTheme } from "./theme-provider"

function ModeToggle() {
  const { setTheme , theme } = useTheme()
  
  return (
    <Button
        variant="outline"
        size="icon"
        onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
    > 
    {
        theme === "dark" ? (<Moon/>):(<Sun/>)
    }
    </Button>
  )
}


export default ModeToggle;