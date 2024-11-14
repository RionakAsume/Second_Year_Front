import { LogoSeconYear } from "../assets/logo"
import { FaRegUserCircle } from "react-icons/fa";
import { useAuth } from "../context/AuthContext";
import { Link } from "react-router-dom";


function HeaderSecond(){

  const { logoutUser } = useAuth();

  const handleClick = async() => {
    await logoutUser();

  };
    return(

        <>
        <header className="w-full h-auto px-5">
        <section className="w-full flex justify-between items-center">
            <Link to={"/"} className="w-48" > 
                <LogoSeconYear />
            </Link>
            <div className="w-1/3 flex justify-end items-center gap-4">
          <button onClick={handleClick} className="font-bold text-2xl mb-1 hover:text-custom-blue ">Cerrar Sesión</button>
            <FaRegUserCircle className="text-3xl text-custom-green" />
          </div>

            </section>
        </header>
      </>

    )
}

export default HeaderSecond