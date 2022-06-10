import axios from "axios";
import { createContext, useReducer, useContext } from "react";
import {datosReducer} from "../reducer/datosReducer";
export const DataContext = createContext();

// Funcion para no estar importando el useContext en los componentes
export const useDatos = () => {
  return useContext(DataContext);
};

export const DataProvider = ({ children }) => {

const dataInicial = {
  Nombre: "Claudio",
  Apellido: "Monzoni Nogueda",
  edad: "43",
};


const [datos, dispatch] = useReducer(datosReducer, dataInicial)
const getDatos = async () => {
const res= await axios.get("https://jsonplaceholder.typicode.com/users");
console.log(res.data);
}

// creo componente que estará envolviendo y proveyendo los demas componentes en _app

  return (
    <DataContext.Provider
      value={{
        datos,
        getDatos,
      }}
    >
      {children}
    </DataContext.Provider>
  );
};
