import './styles/globals.css'
import Header from './header'
import React from 'react'
import styled from 'styled-components';
import './styles/MainPage.css'
import './styles/header.css'
import './styles/reusableForm.css'


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
