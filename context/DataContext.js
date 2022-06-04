import React, { createContext, useContext, useReducer } from "react";
import axios from "axios";
import { datosReducer } from "../reducer/datosReducer";

export const DataContext = createContext();

// Funcion para no estar importando el useContext en los componentes
export const useDatos = () => {
  return useContext(DataContext);
};

const SET_DATOS = "SET_DATOS";

// creo componente que estará envolviendo y proveyendo los demas componentes en _app
export const DataProvider = ({ children }) => {
  // state inicial
  const dataInicial = {
    Nombre: "Claudio",
    Apellido: "Monzoni",
    Edad: "43",
  };

  //  uso el reducer
  const [datos, dispatch] = useReducer(datosReducer, dataInicial);

  const getDatos = async () => {
    const res = await axios.get("https://jsonplaceholder.typicode.com/users");

    console.log(res.data)
    // const rest = fetch("https://jsonplaceholder.typicode.com/users")
    // .then((res) => res.json())
    // .then((datos) => {
    //   setData(datos);
    // })
  };

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
