import Link from 'next/link'
import Head from 'next/head'

const Layout = ({ children, title = 'Default title' }) => {
  return (
    <>
      <Head>
        <title>{title}</title>
        <meta charSet="utf-8" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <nav>
        <Link href="/">
          <a>Home page</a>
        </Link>{' '}
        <Link href="/about">
          <a>About page</a>
        </Link>
      </nav>

      {children}
    </>
  )
}

export default Layout
