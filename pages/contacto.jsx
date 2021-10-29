import dynamic from "next/dynamic";
const Mapa = dynamic(() => import("../components/Mapa"), { ssr: false });
export default function contacto() {
    return (
        <section>
        <h2>Aqui el mapa</h2>
        <div className="mapa">
          <Mapa></Mapa>
        </div>
      </section>
    )
}
