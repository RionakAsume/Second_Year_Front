import { useState } from "react";
import HeaderSecond from "../components/Header";
import VentasTodas from "../components/VentasTodas";
import ClientesSucursal from "../components/ClientesSucursal";
import Ranking from "../components/Ranking";
import ClienteSuperen from "../components/ClienteSuperen";

const Main = () => {

  const [activeComponent, setActiveComponent] = useState("ventas");


  const renderComponent = () => {
    switch (activeComponent) {
      case "ventas":
        return <VentasTodas />;
      case "clientes":
        return <ClientesSucursal />;
      case "ranking":
        return <Ranking />;
      case "superados":
        return <ClienteSuperen />;
      default:
        return null;
    }
  };

  return (
    <div>
      <HeaderSecond />
      <nav className="bg-custom-purple w-full h-16 flex justify-center items-center px-10">
        <div className="w-[60%] h-16 flex justify-between items-center px-10">
          <button
            onClick={() => setActiveComponent("ventas")}
            className="ml-10 font-bold hover:bg-white hover:text-custom-blue bg-custom-green text-white hover:text-custom-purple py-2 px-5 rounded-3xl"
          >
            VENTAS
          </button>
          <button
            onClick={() => setActiveComponent("clientes")}
            className="ml-3 font-bold hover:bg-white hover:text-custom-blue bg-custom-green text-white hover:text-custom-purple py-2 px-5 rounded-3xl"
          >
            CLIENTES
          </button>
          <button
            onClick={() => setActiveComponent("ranking")}
            className="ml-3 font-bold hover:bg-white hover:text-custom-blue bg-custom-green text-white hover:text-custom-purple py-2 px-5 rounded-3xl"
          >
            RANKING
          </button>
          <button
            onClick={() => setActiveComponent("superados")}
            className="ml-3 font-bold hover:bg-white hover:text-custom-blue bg-custom-green text-white hover:text-custom-purple py-2 px-5 rounded-3xl"
          >
            SUPERADOS
          </button>
        </div>
      </nav>

      <div className="mt-4">
        {renderComponent()}
      </div>
    </div>
  );
};

export default Main;