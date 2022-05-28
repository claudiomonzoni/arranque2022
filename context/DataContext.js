import React, { createContext, useState, useContext, useEffect } from "react";
export const DataContext = createContext();

const dataFix = {
  Nombre: "Claudio",
  Apellido: "Monzoni Nogueda",
  edad: "43",
};

async function apiRest(){

  const rest = await fetch('https://jsonplaceholder.typicode.com/users')
  .then((res) => res.json())
  .then((dataFix) => console.log(dataFix))
  
}
apiRest()

// Funcion para no estar importando el useContext en los componentes
export const useDatos = () => {
  return useContext(DataContext);
};

// creo componente que estará envolviendo y proveyendo los demas componentes en _app
export const DataProvider = ({ children }) => {
  const [data, setData] = useState(dataFix);

  return (
    <DataContext.Provider
      value={{
        data,
        setData,
      }}
    >
      {children}
    </DataContext.Provider>
  );
};
