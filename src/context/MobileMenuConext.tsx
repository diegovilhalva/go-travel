import {
  useContext,
  createContext,
  useState,
  ReactElement,
  Dispatch,
  SetStateAction,
} from "react";

interface Props {
  children: ReactElement;
}

interface contextValueShape {
  menuOpened: boolean;
  setMenuOpened: Dispatch<SetStateAction<boolean>>;
}

const MenuContext = createContext<contextValueShape>({
  menuOpened: false,
  setMenuOpened: () => {},
});

export default function MenuContextProvider(props: Props) {
  const [menuOpened, setMenuOpened] = useState<boolean>(false);

  return (
    <MenuContext.Provider value={{ menuOpened, setMenuOpened }}>
      {props.children}
    </MenuContext.Provider>
  );
}

export function useMenuContext() {
  return useContext(MenuContext);
}
