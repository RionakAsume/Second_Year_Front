import { useFormik } from "formik"

const ClienteSuperen = () => {

  const formik = useFormik({
    initialValues: { monto: '' },
    onSubmit: () => {
      // Realiza la búsqueda en la base de datos con el filtro de monto.
    },
  });

  return (
  <div className="mb-10">
    <div className=" w-full h-24 flex justify-around items-center px-10">
      <div >
          <h1 className="font-bold"> Clientes que superen</h1>
        </div>
        <div className="flex gap-2">
          <form onSubmit={formik.handleSubmit} className="flex space-x-2">
            <h1 className="font-bold w-auto flex items-center">Monto: </h1>
            <input
              name="monto"
              type="text"
              placeholder=" $"
              onChange={formik.handleChange}
              value={formik.values.monto}
              className="input border-zinc-950 border"
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
              <th className="bg-custom-purple table-auto mt-4 border-white border-2 text-white" >Nombre</th>
              <th className="bg-custom-purple table-auto mt-4 border-white border-2 text-white" >Apellido</th>
              <th className="bg-custom-purple table-auto mt-4 border-white border-2 text-white" >Factura</th>
              <th className="bg-custom-purple table-auto mt-4 border-white border-2 text-white" >Subtotal</th>
              <th className="bg-custom-purple table-auto mt-4 border-white border-2 text-white" >Semana</th>
            </tr>
          </thead>
          <tbody>
          <th className=" table-auto h-8 border-custom-grisoscuro border-2" ></th>
              <th className=" table-auto h-8 border-custom-grisoscuro border-2" ></th>
              <th className=" table-auto h-8 border-custom-grisoscuro border-2" ></th>
              <th className=" table-auto h-8 border-custom-grisoscuro border-2" ></th>
              <th className=" table-auto h-8 border-custom-grisoscuro border-2" ></th>            </tbody>
        </table>
      </div>
  </div>
  )
}

export default ClienteSuperen