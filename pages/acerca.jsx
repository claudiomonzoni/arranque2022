import Layout from "../components/Layout";
import { useContext } from "react";
import { DataContext } from "../context/DataContext";
import { useEffect } from "react";
import Listadeusuariosprops from "../components/Listadeusuariosprops";

export default function Acerca(props) {
  const { losdatos } = props;
  const { getDatos } = useContext(DataContext);
  useEffect(() => {
    //actualizo el context con la funcion getDatos
    getDatos(losdatos);
  }, []);

  return (
    <Layout
      titulo="Acerca de nosotros"
      descripcion="Somos una empresa dedicada a la venta de productos de limpieza"
    >
      <section>
        <h2>Acerca de </h2>
        <hr />
        <p>datos desde getStaticprops</p>
        <Listadeusuariosprops props={losdatos} />
      </section>
    </Layout>
  );
}

export async function getServerSideProps(props) {
  const laurl = "https://jsonplaceholder.typicode.com/users/";
  const res = await fetch(laurl);
  const losdatos = await res.json();
  return {
    props: {
      losdatos,
    },
  };
}
