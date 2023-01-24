import { useEffect } from 'react'
import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { MovieContextProvider } from '../context/MovieContext'
import { AuthContextProvider } from '../context/AuthContext'


function MyApp({ Component, pageProps }: AppProps) {

useEffect(()=>{
document.title='Netflix Clone'
},[])




  return <AuthContextProvider>
    <MovieContextProvider>
    <Component {...pageProps} />
  </MovieContextProvider>
  </AuthContextProvider>
}

export default MyApp
