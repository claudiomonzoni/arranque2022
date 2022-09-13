import { DataContext } from "../context/DataContext";
import { useContext } from "react";
import { useEffect } from "react";

export default function DesdeContenful() {
  const { getContentful, datos } = useContext(DataContext);
  useEffect(() => {
    getContentful();
  }, []);

  return (
    <div>
      <h2>Lista de usuarios desde contenful y context</h2>
      <p>
        hacer consolo log, primero devuelve undefined y luego si trae los datos
      </p>
      {console.log(datos.datos)}
       {
      // datos.datos ? datos.datos.map((items, index) => (
      //   <div key={index}>
      //     <p>{console.log(items)}</p>
      //   </div>
      // ))
      // : null
      
      } 
    </div>
  );
}
