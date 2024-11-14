import { useFormik } from "formik"
import { useDb } from "../context/DbContext";

const ClienteSuperen = () => {

  const { getClienteSuperanElMin, superanMin } = useDb()


  const formik = useFormik({
    initialValues: { monto: 0 },
    onSubmit: (values) => {
      console.log(values.monto);

      getClienteSuperanElMin(values.monto);


    },
  });

  return (
    <div className="mb-10">
      <div className=" w-full h-24 flex justify-around items-center px-10">
        <div >
          <h1 className="font-bold"> Clientes que superan el minimo</h1>
        </div>
        <div className="flex gap-2">
          <form onSubmit={formik.handleSubmit} className="flex space-x-2">
            <h1 className="font-bold w-auto flex items-center">Monto: </h1>
            <input
              name="monto"
              type="number"
              placeholder="$"
              onChange={formik.handleChange}

              className=" border-zinc-950 border placeholder:ml-1 pl-2 h-10 appearance-none custom-number-input"
            />
            <button
              type="submit"
              className="btn bg-custom-purple p-2 text-white hover:bg-custom-green"
            >
              Ok
            </button>
          </form>
        </div>
      </div>
      <div className="w-full flex items-center justify-center" >
        <table className="w-[70%]">
          <thead >
            <tr>
              <th className="bg-custom-purple table-auto mt-4 border-custom-grisoscuro border-2 text-white" >Posicion</th>
              <th className="bg-custom-purple table-auto mt-4 border-custom-grisoscuro border-2 text-white" >Nombre completo</th>

              <th className="bg-custom-purple table-auto mt-4 border-custom-grisoscuro border-2 text-white" >Total de ventas durante el semestre</th>
            </tr>
          </thead>
          <tbody>
            {superanMin.length > 0 ? (
              superanMin.map((detalle,i) => (
                <tr key={detalle.id}>
                  <th className="table-auto h-8 border-custom-grisoscuro border-2">{i+1}</th>
                  <th className="table-auto h-8 border-custom-grisoscuro border-2">{detalle.nombre_apellido}</th>
                  <th className="table-auto h-8 border-custom-grisoscuro border-2">{detalle.total_ventas_semestrales}</th>
               
                </tr>
              ))
            ) : (
              <tr>
                <th className="table-auto h-8 border-custom-grisoscuro border-2"></th>
                <th className="table-auto h-8 border-custom-grisoscuro border-2"></th>
                <th className="table-auto h-8 border-custom-grisoscuro border-2"></th>
     
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default ClienteSuperen