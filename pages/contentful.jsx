import Layout from "../components/Layout"
import DesdeContenful from "../components/DesdeContenful"
import cliente from "../contentful"

export default function contentful(props) {
  return (
    <Layout titulo="Contentful" descripcion="Pagina de Contentful">
    <div>
<h1>Contenful</h1>
<DesdeContenful props={props}  />
    </div>
    </Layout>
  )
}

export async function getServerSideProps(props) {
  const res = await cliente.getEntries({
    content_type: "resortRooms" 
  })
  return {
    props: {
      posts:res
    },
  };
}
