
const ClientesSucursal = () => {
  return (
    <div className=" w-full h-24 flex justify-around items-center px-10">
    <div><h1 className="font-bold" > Clientes de Sucursal</h1></div>
    <div className="flex gap-2">
        <h1 className="font-bold">Por Sucursal: </h1>
        <input className="border-zinc-950 border" type="number" placeholder=" Sucursal N°" name="id" autoComplete="off"/>                    

    </div>
</div>
  )
}

export default ClientesSucursal