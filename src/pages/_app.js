import '../styles/globals.css'
import {useState} from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import { SearchProvider } from '../context/SearchContext'

export default function App({ Component, pageProps }) {
  return (
    <>
      <SearchProvider>
        <Navbar />
        <Component {...pageProps} />
        <Footer />
      </SearchProvider>
    </>
  )
}