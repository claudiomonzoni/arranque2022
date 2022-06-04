import Layout from "../components/Layout"
import { useContext } from "react"
import { DataContext } from "../context/dataContext"

export default function acerca(){
    const { datos } = useContext(DataContext)

    return(
        <Layout titulo="Acerca de nosotros" descripcion="Somos una empresa dedicada a la venta de productos de limpieza">
            <section>
                <h2>Acerca de </h2>
                <pre>
                    {JSON.stringify(datos, null, 2)}
                </pre>
            </section>
        </Layout>
    )
}