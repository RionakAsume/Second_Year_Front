import { useDb } from "../context/DbContext"


const Ranking = () => {
  const { clienteRanking } = useDb()



  return (
    <div className="mb-10">
      <div className=" w-full h-24 flex justify-around items-center px-10">
        <div><h1 className="font-bold text-4xl" > Ranking de los 10 mejores clientes</h1></div>

      </div>
      <div className="w-full flex items-center justify-center" >
        <table className="w-[70%]">
          <thead >
            <tr>
              <th className="bg-custom-purple table-auto mt-4 border-custom-grisoscuro border text-white" >Puesto n°</th>
              <th className="bg-custom-purple table-auto mt-4 border-custom-grisoscuro border text-white" >Nombre completo</th>

              <th className="bg-custom-purple table-auto mt-4 border-custom-grisoscuro border text-white" >Cantidad de compras</th>
            </tr>
          </thead>
          <tbody>
            {clienteRanking.length > 0 ? (
              clienteRanking.map((detalle,i) => (
                <tr key={detalle.id}>
                  <th className="table-auto h-8 border-custom-grisoscuro border-2">{i+1}</th>
                  <th className="table-auto h-8 border-custom-grisoscuro border-2">{detalle.nombre_clientes}</th>
                  <th className="table-auto h-8 border-custom-grisoscuro border-2">{detalle.cantidad}</th>

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
  )
}

export default Ranking