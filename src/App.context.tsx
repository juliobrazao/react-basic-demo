import { ReactNode, createContext, useState } from "react";

interface AppContextProps {
  title: string;
  setTitle: (title: string) => void;
  showModal: boolean;
  setShowModal: (showModal: boolean) => void;
  newsToDisplay: number;
  setNewsToDisplay: (newsToDisplay: number) => void;
  handleToggleModal: () => void;
};

interface AppContextProviderProps {
  children: ReactNode;
};

export const AppContext = createContext<AppContextProps | null>(null);

export default function AppContextProvider({ children }: AppContextProviderProps){

  const [title, setTitle] = useState<string>("React Basic Demo");
  const [showModal, setShowModal] = useState<boolean>(false);
  const [newsToDisplay, setNewsToDisplay] = useState<number>(1);

  const handleToggleModal = () => {
    setShowModal(!showModal);
  };

  const ContextFunctions = {
    title,
    setTitle,
    showModal,
    setShowModal,
    newsToDisplay,
    setNewsToDisplay,
    handleToggleModal
  };

  return (
    <AppContext.Provider value={ContextFunctions}>
      { children }
    </AppContext.Provider>
  )
}
