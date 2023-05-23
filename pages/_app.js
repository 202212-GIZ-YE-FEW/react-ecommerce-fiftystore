import '@/styles/globals.css'
import Navbar from '@/src/components/Navbar'
import Footer from '@/src/components/Footer'
import { CategoryProvider } from "@/src/context/CategoryContext";
export default function App({ Component, pageProps }) {
  return (
    <>
      <CategoryProvider>
        <Navbar />
          <Component {...pageProps} />
        <Footer />
      </CategoryProvider>
    </>
  )
}