import { useState } from "react";
import { AppContext } from "./App.context";
import Navbar from "./components/Header";

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

  return (
    <AppContext.Provider value={{title, setTitle}}>
      <Navbar />
      <ContainerFluid>
      </ContainerFluid>
    </AppContext.Provider>
  );
}