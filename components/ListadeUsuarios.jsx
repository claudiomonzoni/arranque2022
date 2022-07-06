import { useEffect } from "react";
import { useDatos } from "../context/dataContext";

export default function ListadeUsuarios() {
  const { getDatos, datos } = useDatos();
  useEffect(() => {
    getDatos(); 
  }, []);
  return (
    <div>
      <h1>ListadeUsuarios</h1>

      {
      console.log(datos.datos)
      }
      <pre>{JSON.stringify(datos, null, 2)}</pre>
    </div>
  );
}
