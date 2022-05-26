import Layout from "../components/Layout"
import { useContext } from "react"
import { DataContext } from "../context/dataContext"

export default function acerca(){
    const { data } = useContext(DataContext)

    return(
        <Layout titulo="Acerca de nosotros" descripcion="Somos una empresa dedicada a la venta de productos de limpieza">
            <section>
                <h2>Acerca de </h2>
                <pre>
                    {JSON.stringify(data, null, 2)}
                </pre>
            </section>
        </Layout>
    )
}