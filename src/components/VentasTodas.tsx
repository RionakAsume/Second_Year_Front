import { useFormik } from "formik";
const VentasTodas = () => {
  const formik = useFormik({
    initialValues: { month: "" },
    onSubmit: () => {},
    // Realiza la búsqueda en la base de datos con el filtro de mes.
  });

  return (
    <div className="mb-10">
      <div className=" w-full h-24 flex justify-around items-center px-10">
        <div>
          <h1 className="font-bold"> Todas las Ventas</h1>
        </div>
        <div className="flex gap-2">
          <form onSubmit={formik.handleSubmit} className="flex space-x-2">
            <h1 className="font-bold w-auto flex items-center">Por Mes: </h1>
            <input
              name="month"
              type="text"
              placeholder=" N° de mes"
              onChange={formik.handleChange}
              value={formik.values.month}
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
              <th className="bg-custom-purple table-auto mt-4 border-white border-2 text-white" >Factura</th>
              <th className="bg-custom-purple table-auto mt-4 border-white border-2 text-white" >Subtotal</th>
              <th className="bg-custom-purple table-auto mt-4 border-white border-2 text-white" >Nombre</th>
              <th className="bg-custom-purple table-auto mt-4 border-white border-2 text-white" >Apellido</th>
              <th className="bg-custom-purple table-auto mt-4 border-white border-2 text-white" >Pago</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th className=" table-auto h-8 border-custom-grisoscuro border-2" ></th>
              <th className=" table-auto h-8 border-custom-grisoscuro border-2" ></th>
              <th className=" table-auto h-8 border-custom-grisoscuro border-2" ></th>
              <th className=" table-auto h-8 border-custom-grisoscuro border-2" ></th>
              <th className=" table-auto h-8 border-custom-grisoscuro border-2" ></th>
            </tr>
            </tbody>
        </table>
      </div>
    </div>
  );
};

export default VentasTodas;
