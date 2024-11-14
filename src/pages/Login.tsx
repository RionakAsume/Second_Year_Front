import { useFormik } from "formik";
import * as Yup from "yup";
import { LogoSeconYear } from "../assets/logo";
import { useAuth } from "../context/AuthContext";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

interface myFormValues {
  password: string;

  email: string;
}

const schema = Yup.object().shape({
  email: Yup.string().email("Email invalido").required(),
  password: Yup.string().required(),
});

const Login = () => {
  const { signin, authErrors, isAutheticaded } = useAuth();
  const navigate = useNavigate();

  
  useEffect(() => {
    if (isAutheticaded) navigate("/");
  }, [isAutheticaded]);

  const submitForm = async (values: myFormValues) => {
    signin(values);
  };

  const { handleSubmit, handleChange, handleReset, errors, values } = useFormik(
    {
      initialValues: {
        email: "",
        password: "",
      },
      onSubmit: submitForm,
      validationSchema: schema,
    }
  );

  return (
    <div className="h-screen w-full bg-[url('./assets/secondYearFondo.png')] bg-cover bg-center flex items-center justify-center">
      <div className=" bg-custom-blue w-1/4 flex items-center flex-col bg-custom-purple h-auto rounded-xl shadow-lg ">
        <div className="w-full h-44 flex justify-center items-center py-4 rounded-2xl bg-white ">
          <LogoSeconYear />
        </div>
        <form onSubmit={handleSubmit} onReset={handleReset}>
          <h2 className="text-white mt-3 font-bold mb-1">Usuario</h2>
          <input
            className="border border-gray-300 p-2 rounded w-52 flex justify-center"
            type="email"
            placeholder="usuario@usuario.com"
            name="email"
            value={values.email}
            onChange={handleChange}
            autoComplete="off"
          />
          {errors.email && (
            <span className="text-custom-yellow text-xs">Email invalido</span>
          )}

          <br />
          <h2 className="text-[#ffff] mb-1 font-bold mt-1">Contraseña</h2>
          <input
            className="border border-[#f5f5f5] p-2 rounded w-52 flex justify-center"
            type="password"
            placeholder="********"
            name="password"
            value={values.password}
            onChange={handleChange}
            autoComplete="off"
          />
          {errors.password && (
            <span className="text-custom-yellow text-xs">
              Password invalido
            </span>
          )}

          <div className="w-full flex flex-col items-center justify-center">
            {authErrors.map((error, i) => (
              <div className="text-custom-yellow my-1 text-xs" key={i}>
                {error}
              </div>
            ))}
            <div className="w-full mb-5 flex items-center justify-center">
              <div className=" flex flex-col mt-2">
                <div className="flex gap-2">
                  <p className="text-white font-bold"> No tienes cuenta? </p>
                  <Link
                    className="text-custom-yellow font-bold"
                    to={"/Register"}
                  >
                    Registrate
                  </Link>
                </div>

                <button
                  className="mt-5 h-10 hover:bg-[#ffff] bg-custom-green text-[#ffff] font-bold hover:text-custom-green p-2 rounded"
                  type="submit"
                >
                  Iniciar Sesión
                </button>
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
