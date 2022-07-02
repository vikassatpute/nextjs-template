import Footer from 'components/Footer'
import Header from 'components/Header'
import Head from 'next/head'

export default function Layout({ children }) {
  return (
    <>
      <Head>
        <title>Layouts </title>
      </Head>
      <Header />
      <main>{children}</main>
      <Footer />
    </>
  )
}
