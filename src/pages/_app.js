import '@/styles/globals.css'
import {useState} from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import { SearchProvider } from '../context/SearchContext'

export default function App({ Component, pageProps }) {
  // Get menu data via GraphQL query in `pageProps`.
  const {menu} = pageProps

  // Store menu as state for the MenuProvider.
  const [navMenu] = useState(menu)
  return (
    <>
      <SearchProvider value={navMenu}>
        <Navbar />
        <Component {...pageProps} />
        <Footer />
      </SearchProvider>
    </>
  )
}