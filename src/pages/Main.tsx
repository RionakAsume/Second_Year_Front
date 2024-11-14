import HeaderSecond from "../components/Header"
import VentasTodas from "../components/VentasTodas"
import ClientesSucursal from "../components/ClientesSucursal"
import Ranking from "../components/Ranking"
import ClienteSuperen from "../components/ClienteSuperen"

const Main = () => {
    return (
        <div>
            <HeaderSecond />
            <nav className=" bg-custom-purple w-full h-16 flex justify-center items-center px-10">
                <div className="  w-[60%] h-16 flex justify-between items-center px-10">
                    <button className="ml-10 font-bold hover:bg-white hover:text-custom-blue bg-custom-green text-white hover:text-custom-purple py-2 px-5 rounded-3xl"> VENTAS </button>
                    <button className="ml-3 font-bold hover:bg-white hover:text-custom-blue bg-custom-green text-white hover:text-custom-purple py-2 px-5 rounded-3xl" >  CLIENTES </button>
                    <button className="ml-3 font-bold hover:bg-white hover:text-custom-blue bg-custom-green text-white hover:text-custom-purple py-2 px-5 rounded-3xl" >  RANKING </button>
                    <button className="ml-3 font-bold hover:bg-white hover:text-custom-blue bg-custom-green text-white hover:text-custom-purple py-2 px-5 rounded-3xl"> SUPERADOS </button>

                </div>
                
                {/* <div>
                    <form onSubmit={(e) => e.preventDefault()}>
                        <input
                            type="search"
                            placeholder="Buscar por cliente"
                            value={busqueda}
                            onChange={handleSearchChange}
                            className="border border-gray-200 p-2 rounded w-52 mr-10"
                        />
                    </form>
                </div> */}

                 </nav>
                <VentasTodas/>
                <ClientesSucursal/>
                <Ranking/>
                <ClienteSuperen/>
            
        </div>
    )
}

export default Main