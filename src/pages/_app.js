import '../../styles/globals.css'
import '@simonwep/pickr/dist/themes/nano.min.css'; 
import '../../styles/tailwind.css'
import {CanvasProvider} from '../components/CanvasContext'

function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />
}

export default MyApp
