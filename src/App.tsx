import { useState } from "react";
import { AppContext } from "./App.context";
import Navbar from "./components/Header";
import MyModal from "./components/MyModal";

interface ContainerFluidProps {
  children: React.ReactNode;
}

function ContainerFluid({ children }: ContainerFluidProps) {
  return (
    <div className="container-fluid mt-3">
      {children}
    </div>
  );
};

export default function App() {

  const [title, setTitle] = useState<string>("Minha Pagina");

  const [showModal, setShowModal] = useState(false);

  const handleToggleModal = () => {
    setShowModal(!showModal);
  };

  return (
    <AppContext.Provider value={{title, setTitle, showModal, setShowModal, handleToggleModal}}>
      <Navbar />
      <ContainerFluid>
      </ContainerFluid>
      <MyModal />
    </AppContext.Provider>
  );
}