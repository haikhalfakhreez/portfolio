import Navbar from './navbar'
import Footer from './footer'

export default function Layout({ children }: { children: any }) {
  return (
    <>
      <Navbar />
      <main className="bg-white pt-14">{children}</main>
      <Footer />
    </>
  )
}
