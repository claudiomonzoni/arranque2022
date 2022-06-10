import { useEffect } from "react";
import { useDatos } from "../context/dataContext";

export default function ListadeUsuarios() {
  const { getDatos } = useDatos();

  useEffect(() => {
    getDatos();
  }, []);
  return <div>ListadeUsuarios</div>;
}
