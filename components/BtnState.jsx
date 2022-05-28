import { useDatos } from "../context/dataContext"

const data = {
  Nombre: "Angel",
  Apellido: "Monzoni ",
  edad: "20'",
};


export default function BtnState() {
  const {setData } = useDatos();
  return (
    <botton onClick={()=>setData(data)}>
      Cambiar el state
      </botton>
  )
}
