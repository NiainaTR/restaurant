import { ReactNode, createContext, useEffect, useState } from "react";

type ToggleMenuContextPropsType   = {
  isToggle: boolean;
  setIsToggle: React.Dispatch<React.SetStateAction<boolean>>;
  isToggleCart: boolean;
  setIsToggleCart: React.Dispatch<React.SetStateAction<boolean>>;
}

export const ToggleMenuContext = createContext<ToggleMenuContextPropsType>({
  isToggle: false,
  setIsToggle: () => {},
  isToggleCart: false,
  setIsToggleCart: () => {},
});


function ToggleMenuProvider({ children }: { children: ReactNode }) {
  const [isToggle, setIsToggle] = useState(false);
  const [isToggleCart, setIsToggleCart] = useState(false);

  useEffect(() => {
    if (isToggle && isToggleCart) {
      setIsToggleCart(false);
    }
  }, [isToggle]);
  
  useEffect(() => {
    if (isToggleCart && isToggle) {
      setIsToggle(false);
    }
  }, [isToggleCart]);
  
  return (
    <ToggleMenuContext.Provider value={{ isToggle, setIsToggle , isToggleCart , setIsToggleCart }}>
      {children}
    </ToggleMenuContext.Provider>
  );
}

export default ToggleMenuProvider;
