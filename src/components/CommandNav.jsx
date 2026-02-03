import { Link } from "react-router-dom"

export default function CommandNav() {
  return (
    <div className="w-full bg-neutral-100 border-b border-black/10">
      <div className="grid grid-cols-12 items-center h-24">

        {/* Logo / Mark */}
        <div className="col-span-1 flex items-center justify-center border-r border-black/10 h-full">
          <span className="font-bold tracking-widest">III</span>
        </div>

        {/* Status */}
        <div className="col-span-3 px-6 text-xs uppercase tracking-wider">
          <p>vite</p>
          <p>quick</p>
          <p>быстрый</p>
        </div>

        {/* Nav */}
        <nav className="col-span-4 flex justify-center gap-12 text-sm uppercase tracking-widest">
          <Link to="/" className="hover:underline">Home</Link>
          <Link to="/portfolio" className="hover:underline">Portfolio</Link>
          <Link to="/contact" className="hover:underline">Contact</Link>
        </nav>

        {/* Social (external link stays <a>) */}
        <div className="col-span-1 flex items-center justify-center border-l border-black/10 h-full">
          <a
            href="https://www.linkedin.com/in/ernestoalquicira/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm"
          >
            in
          </a>
        </div>

        {/* Availability */}
        <div className="col-span-2 px-6 text-sm">
          <p>Coding globally</p>
          <p className="font-medium">Available for freelance</p>
        </div>

        {/* QR / Action */}
        <div className="col-span-1 flex items-center justify-center border-l border-black/10 h-full">
          <div className="w-10 h-10 bg-black/10" />
        </div>

      </div>
    </div>
  )
}
