
const VentasTodas = () => {
  return (
    <div className=" w-full h-24 flex justify-around items-center px-10">
        <div><h1 className="font-bold" > Todas las Ventas</h1></div>
        <div className="flex gap-2">
            <h1 className="font-bold">Por Mes: </h1>
            <input className="border-zinc-950 border" type="number" placeholder=" Mes N°" name="id" autoComplete="off"/>                    

        </div>
    </div>
  )
}

export default VentasTodas