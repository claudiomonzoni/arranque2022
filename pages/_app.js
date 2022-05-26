import '../styles/style.scss'
import { dataProvider } from '../context/dataContext'

function MyApp({ Component, pageProps }) {
  return(
    <dataProvider>
    <Component {...pageProps} />
    </dataProvider>
  )
  
}

export default MyApp
