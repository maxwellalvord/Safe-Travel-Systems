import '../styles/globals.css'
import Header from './header'
import React from 'react'
import styled from 'styled-components';

const Head = styled.a`
color: #5c8c9c;
`;

function MyApp({ Component, pageProps }) {
  return <React.Fragment>
      <Head><Header /></Head>
      <Component {...pageProps} />
    </React.Fragment>
}

export default MyApp
