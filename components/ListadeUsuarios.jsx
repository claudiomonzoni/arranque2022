import { useEffect } from "react";
import {useDatos} from '../context/DataContext';

export default function ListadeUsuarios() {
  const { getDatos, datos } = useDatos();

  useEffect(() => {
    datos
  }, []);
  return (
    <div>
      <h2>Lista de usuarios desde context</h2>
      <p>
        Esta lista la cargo desde context y esta vacia hasta que entro a la sección de acerca donde desde getStaticprops cargo la api y despues con useEffect inyecto los props a context, solo como experimento, no hay uso real.
      </p>

      {
      
      datos.datos.map((usuario, index) => (
        <div key={index}>
          <p>{usuario.name}</p>
        </div>
      ))
    
      
      }
    </div>
  );
}
