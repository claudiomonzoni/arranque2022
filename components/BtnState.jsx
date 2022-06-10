import { useDatos } from "../context/dataContext"

export default function BtnState() {
  const {getDatos } = useDatos();
  return (
    <button onClick={()=>getDatos()}>
      Cambiar el state
      </button>

      
  )
}
