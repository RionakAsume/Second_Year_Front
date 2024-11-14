import axios from "./axios"



export const getVentasPorMesRequest = (mes) => axios.post(`/facturas`, { mes });
export const getClientePorSucursalRequest = (id_sucursal) => axios.post(`/clientes/sucursal`, { id_sucursal });

export const getClienteRankingRequest = () => axios.get('/clientes')


export const getClienteSuperanElMinRequest = (montoMinimo) => axios.post('/clientes/monto', { montoMinimo })


