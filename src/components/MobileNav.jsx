import { Link } from "react-router-dom"

export default function MobileNav() {
  return (
    <div className="md:hidden w-full border-b border-black/10 bg-neutral-100">
      <div className="flex items-center justify-between h-16 px-4">

        {/* Logo / Mark */}
        <span className="font-bold tracking-widest text-sm">III</span>

        {/* Nav */}
        <nav className="flex gap-6 text-xs uppercase tracking-widest">
          <Link to="/" className="hover:underline">Home</Link>
          <Link to="/portfolio" className="hover:underline">Portfolio</Link>
          <Link to="/contact" className="hover:underline">Contact</Link>
        </nav>

      </div>
    </div>
  )
}
