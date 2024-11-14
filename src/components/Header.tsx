import { LogoSeconYear } from "../assets/logo"
import { FaRegUserCircle } from "react-icons/fa";
import { useAuth } from "../context/AuthContext";
import { Link } from "react-router-dom";


function HeaderSecond() {

  const { logoutUser, user, isAutheticaded } = useAuth();

  const handleClick = async () => {
    await logoutUser();

  };
  return (

    <>
      <header className="w-full h-auto px-5">
        <section className="w-full flex justify-between items-center">
          <Link to={"/"} className="w-48" >
            <LogoSeconYear />
          </Link>
          <div className="w-1/3 flex justify-end items-center gap-4">
            <div className="flex justify-center items-center flex-col">
              {isAutheticaded ? (
                <p className="font-bold text-2xl ">Hola {user.full_name}</p>
              ) : (
                <p></p>
              )}

              <button onClick={handleClick} className=" text-lg mb-1 hover:text-custom-purple hover:underline">Cerrar Sesión</button>
            </div>
            <FaRegUserCircle className="text-4xl ml-3 text-custom-green" />
          </div>

        </section>
      </header>
    </>

  )
}

export default HeaderSecond