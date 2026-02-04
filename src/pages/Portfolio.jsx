import { useEffect, useRef } from "react"
import webImg from "../assets/img/portfolio/1.jpg"
import freelanceImg from "../assets/img/portfolio/2.jpg"
import photoImg from "../assets/img/portfolio/3.jpg"
import motionImg from "../assets/img/portfolio/4.jpg"

import "./portfolio.css"
import { Link } from "react-router-dom"
export default function Portfolio() {
  const row1Ref = useRef(null)
const row2Ref = useRef(null)
useEffect(() => {
  const rows = [row1Ref.current, row2Ref.current]

  rows.forEach((row, i) => {
    if (!row) return

    row.style.opacity = 0
    row.style.transform = "translateY(24px)"

    setTimeout(() => {
      row.style.transition = "opacity 800ms ease-out, transform 800ms ease-out"
      row.style.opacity = 1
      row.style.transform = "translateY(0)"
    }, i * 250)
  })
}, [])

  return (
    <>
   
 <section className="flex items-center justify-center pt-24 pb-16 md:pt-32 md:pb-24">

  <h1 className="text-4xl md:text-6xl font-medium text-center">
    <i> Selected Works </i>
  </h1>
</section>

   <section ref={row1Ref} className="portfolio-grid">
   <article className="grid-item flex flex-col gap-4" data-project="project-1">
   <Link to="/Webdesign" className="group block">
  <div className="image-wrap transition-opacity duration-500 group-hover:opacity-90">
    <img src={webImg} alt="Web design" />
  </div>
</Link>
  <Link
  to="/Webdesign"
  className="text-sm font-medium transition-opacity duration-300 hover:opacity-60"
>
  <h3 className="text-sm font-medium mt-3">web design</h3>
  </Link>
</article>
 <article className="grid-item flex flex-col gap-4" data-project="project-2">
  <Link to="/Photography" className="group block">
  <div className="image-wrap transition-opacity duration-500 group-hover:opacity-90">
    <img src={photoImg} alt="Web design" />
  </div>
</Link>
   <Link
  to="/Photography"
  className="text-sm font-medium transition-opacity duration-300 hover:opacity-60"
>
  <h3 className="text-sm font-medium mt-3">photography</h3>
  </Link>
</article>


</section>
   <section ref={row2Ref} className="portfolio-grid">
 <article className="grid-item flex flex-col gap-4" data-project="project-3">
  <Link to="/Freelance" className="group block">
  <div className="image-wrap transition-opacity duration-500 group-hover:opacity-90">
    <img src={freelanceImg} alt="Web design" />
  </div>
</Link>
   <Link
  to="/Freelance"
  className="text-sm font-medium transition-opacity duration-300 hover:opacity-60"
>
  <h3 className="text-sm font-medium mt-3">freelance & concepts</h3>
  </Link>
</article>

  <article className="grid-item flex flex-col gap-4" data-project="project-4">
    <Link to="/Postproduction" className="group block">
  <div className="image-wrap transition-opacity duration-500 group-hover:opacity-90">
    <img src={motionImg} alt="Web design" />
  </div>
</Link>
  <Link
  to="/Postproduction"
  className="text-sm font-medium transition-opacity duration-300 hover:opacity-60"
>
  <h3 className="text-sm font-medium mt-3">post-production / motion graphics</h3>
  </Link>
</article>

</section>

    </>
  )
}
