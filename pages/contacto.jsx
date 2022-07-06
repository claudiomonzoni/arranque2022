import dynamic from "next/dynamic";
const Mapa = dynamic(() => import("../components/Mapa"), { ssr: false });
import Layout from "../components/Layout";
import ListadeUsuarios from "../components/ListadeUsuarios";

export default function Contacto() {

  return (
    <Layout
      titulo="Soy el contacto"
      descripcion="Soy la descripcion del contacto"
    >
      <section>
        <h2>Aqui el mapa</h2>
        <div className="mapa">
          <Mapa></Mapa>
        </div>
      </section>
      <section>
      {/* <ListadeUsuarios /> */}
      </section>
    </Layout>
  );
}
