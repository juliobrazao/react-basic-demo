import AppContextProvider from "./App.context";
import Navbar from "./components/Header";
import Modal from "./components/Modal";
import Feed from "./components/Feed";

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

  return (
    <AppContextProvider>
      <Navbar />
      <ContainerFluid>
        <Feed />
      </ContainerFluid>
      <Modal />
    </AppContextProvider>
  );
}