// import styles from '../styles/Home.module.css'
import Link from 'next/link';
import styled from 'styled-components';



export default function Home() {

  const A = styled.a`
    color: #5c8c9c;
    hover: cursor;
  `;

  return (
    <>
      <Link href='/about'><A>About</A></Link> &emsp;
      <Link href='/'><A>Home</A></Link> &emsp;
      <Link href='/signin'><A>Sign In</A></Link>
    </>
  )
}
