import { useEffect, useState } from "react"
import { Link, useLocation } from "react-router-dom"

export default function Nav() {
  const location = useLocation()
  const isHome = location.pathname === "/"

  const [hidden, setHidden] = useState(false)

  const linkBase = "transition-colors duration-200"

  const linkColor = isHome
    ? "text-white hover:text-white/60"
    : "text-black hover:text-black/60"
const disableHide = location.pathname === "/photography"

  useEffect(() => {
    let lastScrollY = window.scrollY

    const onScroll = () => {
      const currentScrollY = window.scrollY

     if (!disableHide && currentScrollY > lastScrollY && currentScrollY > 140) {
  setHidden(true)
} else {
  setHidden(false)
}


      lastScrollY = currentScrollY
    }

    window.addEventListener("scroll", onScroll, { passive: true })
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  return (
    <nav
  className={`
    fixed top-0 left-0 right-0 z-50
    flex justify-center
    bg-white/70 backdrop-blur-md
    transition-transform duration-500 ease-out
    ${hidden ? "-translate-y-full" : "translate-y-0"}
  `}
>

      <div className="max-w-6xl w-full px-6 py-4 flex justify-end">
        <ul className="flex gap-8 text-sm tracking-wide">
          <li>
            <Link to="/" className={`${linkBase} ${linkColor}`}>
              home
            </Link>
          </li>
          <li>
            <Link to="/portfolio" className={`${linkBase} ${linkColor}`}>
              portfolio
            </Link>
          </li>
          <li>
            <Link to="/contact" className={`${linkBase} ${linkColor}`}>
              contact
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  )
}
