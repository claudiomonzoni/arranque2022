import '../styles/style.scss'
import { DataProvider } from '../context/DataContext'

function MyApp({ Component, pageProps }) {
  return(
    <DataProvider>
    <Component {...pageProps} />
    </DataProvider>
  )
  
}

export default MyApp
