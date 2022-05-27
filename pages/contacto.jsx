import dynamic from "next/dynamic";
const Mapa = dynamic(() => import("../components/Mapa"), { ssr: false });
import Layout from "../components/Layout";

import { useContext } from "react";
import { DataContext } from "../context/dataContext";

export default function contacto() {
  const { data } = useContext(DataContext);
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
      <pre>
        {JSON.stringify(data, null, 2)}
      </pre>

      </Layout>

      
    )
}
