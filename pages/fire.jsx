import Layout from "../components/Layout";
import {logearse, agregarFireStore} from "../firebase";

export default function fire() {
  return (
    <Layout>
      <div>
        <h1>Aqui las pruebas de firebase</h1>
        <p>empezamos con el login</p>
        <bottom className="btn" onClick={()=>{logearse()}}>Logearse con github</bottom>
      </div>
<hr />
      <section>
        <h2>ToDo de firebase</h2>
        <p>Pequeña aplicación de cale con el sdk de firestore</p>
        <form id="todo" onSubmit={(e)=>{agregarFireStore(e)}} >
          <input type="text" id="Nombre" placeholder="Nombre"/>
          <textarea name="comentarios" id="Comentarios" placeholder="Deja tus saludos"  rows="10"></textarea>
          <button type="submit" id="enviar" className="btn">Enviar</button>
          {/* <a href="#" id="enviar" className="btn">Enviar</a> */}
        </form>
      </section>
    </Layout>
  );
}
