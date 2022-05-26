import React, { createContext, useState } from "react";
export const DataContext = createContext();

const dataFix = {
  Nombre: "Claudio",
  Apellido: "Monzoni",
  edad: "43",
};

export const dataProvider = ({ children }) => {
    const [data, setData] = useState(dataFix);

  return(

    <DataContext.Provider value={{
        data,
        setData
    }}>
          {children}
    </DataContext.Provider>
  )
  
};
