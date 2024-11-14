import { useFormik } from "formik";
const ClientesSucursal = () => {
  const formik = useFormik({
    initialValues: { branchId: "" },
    onSubmit: () => {},
     // Realiza la búsqueda con el filtro de id de sucursal.
  });

  return (
    <div className="mb-10">
      <div className=" w-full h-24 flex justify-around items-center px-10 ">
        <div>
          <h1 className="font-bold"> Clientes de Sucursal</h1>
        </div>

        <div className="flex gap-2">
          <form onSubmit={formik.handleSubmit} className="flex space-x-2">
            <h1 className="font-bold w-auto flex items-center">
              Por Sucursal:
            </h1>
            <input
              name="branchId"
              type="text"
              placeholder=" ID de sucursal"
              onChange={formik.handleChange}
              value={formik.values.branchId}
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
      <div  className="w-full flex items-center justify-center">
        <table className="w-[70%]">
          <thead>
            <tr>
              <th  className="bg-custom-purple table-auto mt-4 border-custom-grisoscuro border-2 text-white" >Nombre</th>
              <th  className="bg-custom-purple table-auto mt-4 border-custom-grisoscuro border-2 text-white" >Apellido</th>
              <th  className="bg-custom-purple table-auto mt-4 border-custom-grisoscuro border-2 text-white" >Teléfono</th>
              <th  className="bg-custom-purple table-auto mt-4 border-custom-grisoscuro border-2 text-white" >DNI</th>
              <th  className="bg-custom-purple table-auto mt-4 border-custom-grisoscuro border-2 text-white" >Email</th>
            </tr>
          </thead>
          <tbody><th className=" table-auto h-8 border-custom-grisoscuro border-2" ></th>
              <th className=" table-auto h-8 border-custom-grisoscuro border-2" ></th>
              <th className=" table-auto h-8 border-custom-grisoscuro border-2" ></th>
              <th className=" table-auto h-8 border-custom-grisoscuro border-2" ></th>
              <th className=" table-auto h-8 border-custom-grisoscuro border-2" ></th></tbody>
        </table>
      </div>
    </div>
  );
};

export default ClientesSucursal;
