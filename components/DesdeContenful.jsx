
export default function DesdeContenful({props}) {

  return (
    <div>
      <h2>Lista de usuarios desde contenful y context</h2>
      <p>
        hacer consolo log, primero devuelve undefined y luego si trae los datos
      </p>

       {
        
      
        props.posts.items.map((item, index) => (
        <div key={index}>
          <p>{item.fields.name}</p>
        </div>
      ))    
      
      }   
    </div>
  );
}

