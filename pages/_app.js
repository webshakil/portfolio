import 'bootstrap/dist/css/bootstrap.min.css';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import '../styles/globals.css';

function MyApp({ Component, pageProps }) {
  return (
    <>
    <ToastContainer theme="colored" position="top-center"/>
  <Component {...pageProps} />
  </>
  )
}

export default MyApp
