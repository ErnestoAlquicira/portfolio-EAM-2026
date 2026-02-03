import webImg from "../assets/img/portfolio/1.jpg"
import freelanceImg from "../assets/img/portfolio/2.jpg"
import photoImg from "../assets/img/portfolio/3.jpg"
import motionImg from "../assets/img/portfolio/4.jpg"
import "./portfolio.css"
import { Link } from "react-router-dom"
export default function Portfolio() {
  return (
    <>
   
 <section className="h-32 flex flex-col items-center justify-center title-section">
  <h1 className="text-6xl mb-5 mt-20">Selected Works</h1>

</section>
<section className="h-24">  </section>
   <section className="portfolio-grid">
   <button className="grid-item flex flex-col gap-4" data-project="project-1">
    <Link to="/Webdesign" className="hover:underline">
  <div className="image-wrap">
    <img src={webImg} alt="Web design" />
  </div>
  </Link>
   <Link to="/Webdesign" className="hover:underline">
  <h3 className="text-sm font-medium mt-3">web design</h3>
  </Link>
</button>
 <button className="grid-item flex flex-col gap-4" data-project="project-3">
    <Link to="/Photography" className="hover:underline">
  <div className="image-wrap">
   <img src={photoImg} alt="Photography" />
  </div>
  </Link>
   <Link to="/Photography" className="hover:underline">
  <h3 className="text-sm font-medium mt-3">photography</h3>
  </Link>
</button>


</section>
   <section className="portfolio-grid">
 <button className="grid-item flex flex-col gap-4" data-project="project-2">
    <Link to="/Freelance" className="hover:underline">
  <div className="image-wrap">
   <img src={freelanceImg} alt="Freelance" />
  </div>
  </Link>
   <Link to="/Freelance" className="hover:underline">
  <h3 className="text-sm font-medium mt-3">freelance & concepts</h3>
  </Link>
</button>

  <button className="grid-item flex flex-col gap-4" data-project="project-4">
    <Link to="/Postproduction" className="hover:underline">
  <div className="image-wrap">
<img src={motionImg} alt="Postproduction" />
  </div>
  </Link>
   <Link to="/Postproduction" className="hover:underline">
  <h3 className="text-sm font-medium mt-3">post-production / motion graphics</h3>
  </Link>
</button>

</section>

    </>
  )
}
