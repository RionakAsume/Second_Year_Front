import { useFormik } from "formik";
import { useDb } from "../context/DbContext";

const VentasTodas = () => {
  const { getFacturasId, facturasMes } = useDb();

  const formik = useFormik({
    initialValues: { month: 0 },
    onSubmit: (values) => {
      console.log(values.month);
     
      getFacturasId(values.month);

     
    },
  });

  return (
    <div className="mb-10">
      <div className="w-full h-24 flex justify-around items-center px-10">
        <div>
          <h1 className="font-bold">Todas las Ventas</h1>
        </div>
        <div className="flex gap-2">
          <form onSubmit={formik.handleSubmit} className="flex w-full">
            <h1 className="font-bold w-auto flex items-center text-nowrap mx-4">Por Mes: </h1>
            <select
              name="month"
              value={formik.values.month}
              onChange={formik.handleChange}
              className="form-select w-full p-2 h-[40px] rounded-[5px] my-3 border border-black"
            >
              <option value={0}>Selecciona un mes</option>
              {[
                "enero", "febrero", "marzo", "abril", "mayo", "junio", 
                "julio", "agosto", "septiembre", "octubre", "noviembre", "diciembre"
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
              <th className="bg-custom-purple table-auto mt-4 border-custom-grisoscuro border-2 text-white">Factura</th>
              <th className="bg-custom-purple table-auto mt-4 border-custom-grisoscuro border-2 text-white">fecha</th>
              <th className="bg-custom-purple table-auto mt-4 border-custom-grisoscuro border-2 text-white">Nombre completo</th>
              <th className="bg-custom-purple table-auto mt-4 border-custom-grisoscuro border-2 text-white">Subtotal</th>
              <th className="bg-custom-purple table-auto mt-4 border-custom-grisoscuro border-2 text-white">Forma de pago</th>
            </tr>
          </thead>
          <tbody>
          {facturasMes.length > 0 ? (
            facturasMes.map((detalle) => (
              <tr key={detalle.id}>
              <th className="table-auto h-8 border-custom-grisoscuro border-2">{detalle.factura_id}</th>
                  <th className="table-auto h-8 border-custom-grisoscuro border-2">{detalle.fechas}</th>
                  <th className="table-auto h-8 border-custom-grisoscuro border-2">{detalle.nombre_cliente}</th>
                  <th className="table-auto h-8 border-custom-grisoscuro border-2">{detalle.monto_factura}</th>
                  <th className="table-auto h-8 border-custom-grisoscuro border-2">{detalle.tipo_pago}</th>
            </tr>
            ))
          ) : (
            <tr>
              <th className="table-auto h-8 border-custom-grisoscuro border-2"></th>
                  <th className="table-auto h-8 border-custom-grisoscuro border-2"></th>
                  <th className="table-auto h-8 border-custom-grisoscuro border-2"></th>
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

export default VentasTodas;
