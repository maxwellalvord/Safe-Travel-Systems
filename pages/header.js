import Link from 'next/link';


export default function Header() {

  return (
    <>
      <Link href='/about'><a>About</a></Link> &emsp;
      <Link href='/'><a>Home</a></Link> &emsp;
      <Link href='/signin'><a>Sign In</a></Link>
    </>
  )
}