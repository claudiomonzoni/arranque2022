import Slider from "../components/Slide";
import Footer from "../components/Footer";
import Layout from "../components/Layout";
import ListadeUsuarios from "../components/ListadeUsuarios";
import Nav from "../components/Nav";

export default function Home() {

  return (
    <div>
      <Layout titulo="Soy el home" descripcion="Soy la descripcion del home">
        <section>
          <h1>Aqui va todo el home</h1>
        </section>
        <section className="slider">
          <Slider></Slider>
        </section>
        <section>
          <ListadeUsuarios />
        </section>
      </Layout>
    </div>
  );
}
