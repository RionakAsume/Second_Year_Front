import { createContext, useState, useContext, ReactNode, useEffect } from "react";
import { getVentasPorMesRequest, getClientePorSucursalRequest, getClienteRankingRequest,getClienteSuperanElMinRequest } from "../api/db";


interface DbContextType {
  getFacturasId: (id: any) => Promise<void>;
  getSucursalId: (id: any) => Promise<void>;
  getClienteSuperanElMin: (id: any) => Promise<void>;

  facturasMes: any;
  sucursalClient: any;
  clienteRanking: any;
  superanMin: any;
}


export const DbContext = createContext<DbContextType | undefined>(undefined);

export const useDb = () => {
  const context = useContext(DbContext);
  if (!context) {
    throw new Error("useDb debe estar dentro de un DbProvider");
  }
  return context;
};

export const DbProvider = ({ children }: { children: ReactNode }) => {
  const [facturasMes, setFacturasMes] = useState<any>([]);
  const [sucursalClient, setSucursalClient] = useState<any>([]);
  const [clienteRanking, setClienteRanking] = useState<any>([]);
  const [superanMin, setSuperanMin] = useState<any>([]);

  const getFacturasId = async (id: any) => {
    try {
      const res = await getVentasPorMesRequest(id);
      console.log(res.data);
      setFacturasMes(res.data);
    } catch (error) {
      console.log(error);
    }
  };

  const getSucursalId = async (id: any) => {
    try {
      const res = await getClientePorSucursalRequest(id);
      console.log(res.data);
      setSucursalClient(res.data);
    } catch (error) {
      console.log(error);
    }
  };

  const getClienteRanking = async () => {
    try {
      const res = await getClienteRankingRequest();
      console.log(res.data);
      setClienteRanking(res.data);
    } catch (error) {
      console.log(error);
    }
  };

  const getClienteSuperanElMin = async (id: any) => {
    try {
      const res = await getClienteSuperanElMinRequest(id);
      console.log(res.data);
      setSuperanMin(res.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getClienteRanking();
  }, []);

  return (
    <DbContext.Provider
      value={{
        getFacturasId,
        facturasMes,
        getSucursalId,
        sucursalClient,
        clienteRanking,
        getClienteSuperanElMin,
        superanMin,
      }}
    >
      {children}
    </DbContext.Provider>
  );
};
