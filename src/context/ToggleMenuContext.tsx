import { ReactNode, createContext, useState } from "react";

type  ToggleMenuContextPropsType   = {
  isToggle: boolean;
  setIsToggle: React.Dispatch<React.SetStateAction<boolean>>;
}

export const ToggleMenuContext = createContext<ToggleMenuContextPropsType>({
  isToggle: false,
  setIsToggle: () => {},
});

function ToggleMenuProvider({ children }: { children: ReactNode }) {
  const [isToggle, setIsToggle] = useState(false);

  return (
    <ToggleMenuContext.Provider value={{ isToggle, setIsToggle }}>
      {children}
    </ToggleMenuContext.Provider>
  );
}

export default ToggleMenuProvider;
