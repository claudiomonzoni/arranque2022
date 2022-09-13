import axios from "axios";
import { createContext, useReducer, useContext } from "react";
import contentful from "../contentful";
import { datosReducer } from "../reducer/datosReducer";
export const DataContext = createContext();
//Resulta que netlify es case sensitive y github no cambia los nombres de los archivos si no cambias nada
// Funcion para no estar importando el useContext en los componentes
export const useDatos = () => {
  return useContext(DataContext);
};

export const DataProvider = ({ children }) => {
  const laurl = "https://jsonplaceholder.typicode.com/users/";

  //inicio los datos iniciales con dataInicial
  const [datos, dispatch] = useReducer(datosReducer, []);

  const getDatos = async (res) => {
    //ahora envio los datos desde props de las secciones, en este caso viene de acerca
    // const res = await axios.get(laurl);
    datos = {
      datos: [],
    };
    dispatch({
      type: "GET_DATOS",
      payload: res,
    });
  };
  const getContentful = async () => {
    // const res = await axios.get(laurl + id);
    let respuesta = await contentful.getEntries({
      // id: datos.datos[0].id,
      content_type: "resortRooms",
      //order: "sys.createdAt"
      // order: "fields.price"
      //precio en reversa
      order: "-fields.price",
    });
    
    dispatch({
      type: "GET_CONTENTFUL",
      payload: respuesta,
    })
    // console.log(respuesta);
    console.log("datosss")
  };

  // creo componente que estará envolviendo y proveyendo los demas componentes en _app

  return (
    <DataContext.Provider
      value={{
        datos,
        getDatos,
        getContentful
      }}
    >
      {children}
    </DataContext.Provider>
  );
};
