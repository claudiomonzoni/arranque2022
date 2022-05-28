import dynamic from "next/dynamic";
import BtnState from "../components/BtnState";
const Mapa = dynamic(() => import("../components/Mapa"), { ssr: false });
import Layout from "../components/Layout";

import { useDatos } from "../context/dataContext";

export default function contacto() {
  const { data } = useDatos();
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
      <pre>{JSON.stringify(data, null, 2)}</pre>
      <BtnState />
    </Layout>
  );
}
