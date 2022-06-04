import { useDatos } from "../context/dataContext";


export default function BtnState() {
  const { getDatos } = useDatos();

  return <botton onClick={() => getDatos()}>Cambiar el state</botton>;
}
