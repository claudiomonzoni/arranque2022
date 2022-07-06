import axios from "axios";
import { createContext, useReducer, useContext } from "react";
import { datosReducer } from "../reducer/datosReducer";
export const DataContext = createContext();

// Funcion para no estar importando el useContext en los componentes
export const useDatos = () => {
  return useContext(DataContext);
};

export const DataProvider = ({ children }) => {
  const laurl = "https://jsonplaceholder.typicode.com/users/";

  const dataInicial = {
    Nombre: "Claudio",
    Apellido: "Monzoni Nogueda",
    edad: "43",
  };

  //inicio los datos iniciales con dataInicial
  const [datos, dispatch] = useReducer(datosReducer, dataInicial);
  

  const getDatos = async (res) => {
    //ahora envio los datos desde props de las secciones, en este caso viene de acerca
    // const res = await axios.get(laurl);
    dispatch({
      type: "GET_DATOS",
      payload: res
    });
  };
  const getUsuario = async (id) => {
    const res = await axios.get(laurl + id);
    console.log(res.data);
  };


  // creo componente que estará envolviendo y proveyendo los demas componentes en _app

  return (
    <DataContext.Provider
      value={{
        datos,
        getDatos,
        getUsuario,
      }}
    >
      {children}
    </DataContext.Provider>
  );
};
