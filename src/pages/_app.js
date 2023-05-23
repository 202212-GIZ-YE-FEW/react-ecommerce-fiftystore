import '../styles/globals.css'
import { CategoryProvider } from "@/src/context/CategoryContext";
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import { SearchProvider } from '../context/SearchContext'

export default function App({ Component, pageProps }) {
  return (
    <>
      <SearchProvider>
        <CategoryProvider>
          <Navbar />
          <Component {...pageProps} />
          <Footer />
        </CategoryProvider>
      </SearchProvider>
    </>
  )
}