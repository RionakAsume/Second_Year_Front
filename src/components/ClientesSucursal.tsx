import { useFormik } from "formik";
import { useDb } from "../context/DbContext";
const ClientesSucursal = () => {

  const { getSucursalId, sucursalClient } = useDb()

  const formik = useFormik({
    initialValues: { branchId: 0 },
    onSubmit: (values) => {
      console.log(values.branchId);

      getSucursalId(values.branchId);

    },

  });

  return (
    <div className="mb-10">
      <div className=" w-full h-24 flex justify-around items-center px-10 ">
        <div>
          <h1 className="font-bold">Buscar al clientes</h1>
        </div>

        <div className="flex gap-2">
          <form onSubmit={formik.handleSubmit} className="flex items-center space-x-2">
            <h1 className="font-bold w-auto flex items-center text-nowrap mx-4">
              Por Sucursal:
            </h1>
            <select
              name="branchId"
              value={formik.values.branchId}
              onChange={formik.handleChange}
              className="form-select w-full p-2 h-[40px] rounded-[5px] my-3 border border-black"
            >
              <option value={0}>Selecciona una sucursal</option>
              {[
                "centro", "central", "barrio", "local1"
              ].map((description, index) => (
                <option key={index} value={index + 1}>
                  {description}
                </option>
              ))}
            </select>
            <button
              type="submit"
              className="bg-custom-purple m-4 px-4 py-1 text-white hover:bg-custom-green rounded"
            >
              Ok
            </button>
          </form>
        </div>
      </div>
      <div className="w-full flex items-center justify-center">
        <table className="w-[70%]">
          <thead>
            <tr>

              <th className="bg-custom-purple table-auto mt-4 border-custom-grisoscuro border-2 text-white" >Cliente id</th>
              <th className="bg-custom-purple table-auto mt-4 border-custom-grisoscuro border-2 text-white" >Nombre completo</th>

            </tr>
          </thead>
          <tbody>
            {sucursalClient.length > 0 ? (
              sucursalClient.map((detalle) => (
                <tr key={detalle.id}>

                  <th className="table-auto h-8 border-custom-grisoscuro border-2">{detalle.cliente_id}</th>
                  <th className="table-auto h-8 border-custom-grisoscuro border-2">{detalle.nombre_apellido}</th>

                </tr>
              ))
            ) : (
              <tr>

                <th className="table-auto h-8 border-custom-grisoscuro border-2"></th>
                <th className="table-auto h-8 border-custom-grisoscuro border-2"></th>

              </tr>
            )}


          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ClientesSucursal;
