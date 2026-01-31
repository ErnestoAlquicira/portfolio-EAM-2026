import { Outlet, useLocation } from "react-router-dom"
import Nav from "./components/Nav"
import Footer from "./components/Footer"

export default function Layout() {
  const location = useLocation()

  const hideNavOn = ["/"] // Home only
  const hideFooterOn = ["/", "/Webdesign", "/Postproduction", "/Photography", "/Freelance"]

  const shouldShowNav = !hideNavOn.includes(location.pathname)
  const shouldShowFooter = !hideFooterOn.includes(location.pathname)

  return (
    <>
      {shouldShowNav && <Nav />}

      <main>
        <Outlet />
      </main>

      {shouldShowFooter && <Footer />}
    </>
  )
}
