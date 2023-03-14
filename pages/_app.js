import '@/styles/globals.css'
import '@/styles/single product.css'
import Navbar from '../src/components/Navbar'
import SingleProduct from '../src/components/Single Product/Single Product'
export default function App({ Component, pageProps }) {
  return (
    <>
      <Navbar />
      <SingleProduct />
      <Component {...pageProps} />
    </>
  )
}