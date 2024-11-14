

const Ranking = () => {
  return (
    <div className="mb-10">
      <div className=" w-full h-24 flex justify-around items-center px-10">
    <div><h1 className="font-bold" > Ranking de los 10 mejores clientes</h1></div>
     
</div>
<div className="w-full flex items-center justify-center" >
        <table className="w-[70%]">
          <thead >
            <tr>
            <th className="bg-custom-purple table-auto mt-4 border-custom-grisoscuro border text-white" >Nombre</th>
            <th className="bg-custom-purple table-auto mt-4 border-custom-grisoscuro border text-white" >Apellido</th>
            <th className="bg-custom-purple table-auto mt-4 border-custom-grisoscuro border text-white" >Telefono</th>
            <th className="bg-custom-purple table-auto mt-4 border-custom-grisoscuro border text-white" >DNI</th>              
            <th className="bg-custom-purple table-auto mt-4 border-custom-grisoscuro border text-white" >Email</th>
            <th className="bg-custom-purple table-auto mt-4 border-custom-grisoscuro border text-white" >Compras</th>
            </tr>
          </thead>
          <tbody> <th className=" table-auto h-8 border-custom-grisoscuro border-2" ></th>
              <th className=" table-auto h-8 border-custom-grisoscuro border-2" ></th>
              <th className=" table-auto h-8 border-custom-grisoscuro border-2" ></th>
              <th className=" table-auto h-8 border-custom-grisoscuro border-2" ></th>
              <th className=" table-auto h-8 border-custom-grisoscuro border-2" ></th>
              <th className=" table-auto h-8 border-custom-grisoscuro border-2" ></th>
              </tbody>
        </table>
      </div>
    </div>
  )
}

export default Ranking