import { DataContext } from "../context/DataContext";
import { useContext } from "react";
import { useEffect } from "react";

export default function DesdeContenful() {
  const { getContentful, datos } = useContext(DataContext);
  getContentful();
  
  useEffect(() => {
    console.log(datos.datos)
    }, []);
  return (
    <div>
      <h2>Lista de usuarios desde contenful y context</h2>
      <p>hacer consolo log</p>
      <p>Al entrar aqui cambio es state con un reducer y como no son los mismos datos que los que se cargan con en la seccion de acerca con staticsProps que vienen de una api rest, todo se desmadra en contacto ( que pedo con tu redacción)</p>
      <p>Debo de encontrar la manera de actualizar el state al entrar y antes del render</p>

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
