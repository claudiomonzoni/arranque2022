import { DataContext } from "../context/DataContext";
import { useContext } from "react";
import { useEffect } from "react";

export default function DesdeContenful() {
  const { getContentful, datos } = useContext(DataContext);
  getContentful();
  
  useEffect(() => {
    console.log(datos.datos.items)
    }, []);
  return (
    <div>
      <h2>Lista de usuarios desde contenful y context</h2>
      <p>hacer consolo log</p>

      {/* {
      
      datos.datos ? datos.datos.map((usuario, index) => (
        <div key={index}>
          <p>{usuario.name}</p>
        </div>
      ))
      : null
      } */}
    </div>
  );
}
