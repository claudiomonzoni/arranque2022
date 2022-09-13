export default function Listadeusuariosprops({props}) {
  return (
    <div>
      <h2>Lista de usuarios desde props</h2>
      {
    props.map((usuario, index) => (
        <div key={index}>
          <p>{usuario.name}</p>
        </div>
      ))
      
      }
    </div>
  );
}
