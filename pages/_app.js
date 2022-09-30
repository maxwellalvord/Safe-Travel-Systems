import '../styles/globals.css'
import Header from './header'
import React from 'react'

function MyApp({ Component, pageProps }) {
  return <React.Fragment>
      <Header></Header>
      <Component {...pageProps} />
    </React.Fragment>
}

export default MyApp
