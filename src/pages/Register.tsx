import Imput from "../components/Imput";
import { Formik, Form } from "formik";
import * as Yup from "yup";
import { useAuth } from "../context/AuthContext";

export const Register = () => {

    const { signup, authErrors, signupCliente, user } = useAuth();


    const initialValues: myFormValues = {
        full_name: "",
        surname: "",
        password: "",
        address: "",
        phone: "",
        dni: "",
        email: "",
        roleId: 0,
        cuit: "",
        razonSocial: "",
        provincia: "",
        localidad: "",
      };
    
    const schema = Yup.object().shape({
        full_name: Yup.string().required("Se requiere un nombre de usuario"),
        surname: Yup.string().required("Se requiere un nombre de usuario"),
        password: Yup.string()
            .max(20, "Máximo permitido 20 caracteres")
            .required("Se requiere contraseña"),
        address: Yup.string()
            .max(50, "Máximo permitido 50 caracteres")
            .required("Se requiere dirección"),
        phone: Yup.string().required("Se requiere teléfono"),
        dni: Yup.number().required("Se requiere DNI").positive().integer(),
        email: Yup.string().email("Email inválido").required("Se requiere email"),

        tipo_dni: Yup.number().required("Se requiere roleId").positive().integer(),
        roleId: Yup.number().required("Se requiere roleId").positive().integer(),


    });


    const handleSubmit = async (values: myFormValues) => {
        console.log(values)
        // const createdUser = await handleUserSubmit(values);
        // console.log("aaaa", values)
        // alert(`Usuario creado ${createdUser.full_name}`);


    };

    return (
        <section className="h-screen w-full bg-[url('./assets/frame-2.jpg')] bg-cover bg-center  flex items-center flex-col ">
         

            <Formik
                initialValues={initialValues}
                onSubmit={handleSubmit}
                validationSchema={schema}
            >
                {({ values, handleChange, handleSubmit, errors, touched }) => (
                    <article className="w-full mt-10 flex justify-center ">
                        <Form className="h-full" onSubmit={handleSubmit}>
                            <div className=" bg-custom-purple rounded-xl shadow-lg flex flex-col justify-between w-[80vw] ">
                                
                                <div className="flex p-5">
                                    <div className="w-full mr-5">
                                        <Imput
                                            nombreUsuario={"Nombre Completo"}
                                            name={"full_name"}
                                            type="text"
                                            value={values.full_name}
                                            onChange={handleChange}
                                        >
                                            {errors.full_name && touched.full_name ? (
                                                <div className="text-custom-rojoalerta flex items-center">
                                                    {errors.full_name}
                                                </div>
                                            ) : null}
                                        </Imput>

                                        <Imput
                                            nombreUsuario={"Apellido"}
                                            name={"surname"}
                                            type="text"
                                            value={values.surname}
                                            onChange={handleChange}
                                        >
                                            {errors.surname && touched.surname ? (
                                                <div className="text-custom-rojoalerta flex items-center">
                                                    {errors.surname}
                                                </div>
                                            ) : null}
                                        </Imput>

                                        <Imput
                                            nombreUsuario={"DNI"}
                                            name={"dni"}
                                            type="number"
                                            value={values.dni}
                                            onChange={handleChange}
                                        >
                                            {errors.dni && touched.dni ? (
                                                <div className="text-custom-rojoalerta flex items-center">
                                                    {errors.dni}
                                                </div>
                                            ) : null}
                                        </Imput>
                                        <Imput
                                            nombreUsuario={"Dirección"}
                                            name={"address"}
                                            type="text"
                                            value={values.address}
                                            onChange={handleChange}
                                        >
                                            {errors.address && touched.address ? (
                                                <div className="text-custom-rojoalerta flex items-center">
                                                    {errors.address}
                                                </div>
                                            ) : null}
                                        </Imput>

                                        <Imput
                                            nombreUsuario={"Teléfono"}
                                            name={"phone"}
                                            type="text"
                                            value={values.phone}
                                            onChange={handleChange}
                                        >
                                            {errors.phone && touched.phone ? (
                                                <div className="text-custom-rojoalerta flex items-center">
                                                    {errors.phone}
                                                </div>
                                            ) : null}
                                        </Imput>
                                        <Imput
                                            nombreUsuario={"Email"}
                                            name={"email"}
                                            type="email"
                                            value={values.email}
                                            onChange={handleChange}
                                        >
                                            {errors.email && touched.email ? (
                                                <div className="text-custom-rojoalerta flex items-center">
                                                    {errors.email}
                                                </div>
                                            ) : null}
                                        </Imput>
                                        <Imput
                                            nombreUsuario={"Contraseña"}
                                            name={"password"}
                                            type="password"
                                            value={values.password}
                                            onChange={handleChange}
                                        >
                                            {errors.password && touched.password ? (
                                                <div className="text-custom-rojoalerta flex items-center">
                                                    {errors.password}
                                                </div>
                                            ) : null}
                                        </Imput>
                                    </div>

                                   

                                        
                                 
                                  
                                </div>
                                <div className="flex justify-center items-center">
                                    {authErrors.map((error, i) => (
                                        <div className="bg-red-600" key={i}>
                                            {error}
                                        </div>
                                    ))}
                                    <button
                                        type="submit"
                                        className="mb-5 hover:bg-[#ffff] font-bold bg-custom-green text-[#ffff] hover:text-custom-green p-2 rounded"
                                    >
                                        Registrar
                                    </button>
                                </div>
                            </div>

                        </Form>
                    </article>
                )}
            </Formik>
        </section>
    )
}


interface myFormValues {
    full_name: string;
    surname: string;
    password: string;
    address: string;
    phone: string;
    dni: string;
    email: string;
    roleId: number;
    cuit?: string;
    razonSocial?: string;
    provincia?: string;
    localidad?: string;
  }
