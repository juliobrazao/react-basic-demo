import { useState } from "react";
import { AppContext } from "./App.context";
import Navbar from "./components/Header";
import MyModal from "./components/MyModal";
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

  const [title, setTitle] = useState<string>("Minha Pagina");
  const [showModal, setShowModal] = useState(false);
  const [newsToDisplay, setNewsToDisplay] = useState<number>(5);

  const handleToggleModal = () => {
    setShowModal(!showModal);
  };

  return (
    <AppContext.Provider value={{title, setTitle, showModal, setShowModal, handleToggleModal, newsToDisplay, setNewsToDisplay}}>
      <Navbar />
      <ContainerFluid>
        <nav aria-label="breadcrumb">
          <ol className="breadcrumb justify-content-end mr-3">
            <li className="breadcrumb-item"><a href="./">Home</a></li>
            <li className="breadcrumb-item active" aria-current="page">{title + "'s Section"}</li>
          </ol>
        </nav>
        <Feed />
      </ContainerFluid>
      <MyModal />
    </AppContext.Provider>
  );
}