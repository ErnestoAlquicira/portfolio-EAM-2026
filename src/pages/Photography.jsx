
import { useState, useRef, useEffect } from "react"
import heroPhoto from "../assets/img/photo/main.jpg"
import photo01 from "../assets/img/photo/01.jpg"
import photo02 from "../assets/img/photo/02.jpg"
import photo03 from "../assets/img/photo/03.jpg"
import photo04 from "../assets/img/photo/04.jpg"
import photo05 from "../assets/img/photo/05.jpg"
import photo06 from "../assets/img/photo/06.jpg"
import photo07 from "../assets/img/photo/07.jpg"
import photo08 from "../assets/img/photo/08.jpg"
import photo09 from "../assets/img/photo/09.jpg"
import photo10 from "../assets/img/photo/10.jpg"
import photo11 from "../assets/img/photo/11.jpg"
import photo12 from "../assets/img/photo/12.jpg"
import photoHero from "../assets/img/photo/13.jpg"
import photo13 from "../assets/img/photo/13.jpg"

const photos = [
  { src: photo01 },
  { src: photo02, ratio: "wide" },
  { src: photo03 },
  { src: photo04 },
  { src: photo05 },
  { src: photo06, ratio: "tall" },
  { src: photo07 },
  { src: photo08, ratio: "wide" },
  { src: photo09 },
  { src: photo10 },
  { src: photo11 },
  { src: photo12 },
]





  function Photo({ src, alt, ratio = "standard" }) {
  const ref = useRef(null)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true)
          observer.disconnect()
        }
      },
      { threshold: 0.2 }
    )

    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [])

  const ratioClass =
    ratio === "wide"
      ? "aspect-[16/9]"
      : ratio === "tall"
      ? "aspect-[3/5]"
      : "aspect-[3/4]"

  return (
    <div
      ref={ref}
      className={`
        overflow-hidden rounded-lg
        transition-all duration-700 ease-out
        ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}
      `}
    >
      <img
  src={src}
  alt={alt}
  className={`
    w-full h-full object-cover ${ratioClass}
    transition-all duration-500 ease-out
    hover:brightness-110
  `}
/>

    </div>
  )
}


  

  export default function Photography() {
    const [isDark, setIsDark] = useState(true)
    const triggerRef = useRef(null)
    const exitRef = useRef(null)

    useEffect(() => {
    const enterObserver = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsDark(true)
        }
      },
      { threshold: 0.2 }
    )

    const exitObserver = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsDark(false)
        }
      },
      { threshold: 0.2 }
    )

    if (triggerRef.current) enterObserver.observe(triggerRef.current)
    if (exitRef.current) exitObserver.observe(exitRef.current)

    return () => {
      enterObserver.disconnect()
      exitObserver.disconnect()
    }
  }, [])


    return (
      <div
        className={`transition-colors duration-700 ${
          isDark ? "bg-black text-white" : "bg-white text-black"
        }`}
      >
      {/* Hero */}
{/* Hero */}
<section className="relative w-full h-[70vh] md:h-[65vh] lg:h-[85vh] overflow-hidden bg-black">
  {/* Image */}
  <img
    src={heroPhoto}
    alt="Photography hero"
    className="absolute inset-0 w-full h-full object-cover"
  />
      <div ref={triggerRef} className="h-24 w-full" />
  {/* Gradient fade */}
  <div
    className="
      absolute inset-0
      bg-gradient-to-b
      bg-gradient-to-b
from-black/0 via-black/30 via-black/60 to-black

    "
  />
</section>

 {/* Theme trigger */}
  


        {/* Intro */}
       <section className="relative max-w-6xl mx-auto px-32 py-24 quote-invert text-center">

  <div className="relative z-10 ">

    <p className="text-1xl md:text-6xl font-light leading-tight mb-12">
      <i>“There is no such thing as inaccuracy in a photograph. All&nbsp;photographs are accurate. None of them is the truth.”</i>
    </p>
    <p className="text-sm text-white/60 mb-18">
               Richard Avedon
              </p>
    
    
  </div>
</section>


       
<section className="max-w-[1600px] mx-auto px-6 pt-12 pb-8">
  <div className="overflow-hidden rounded-lg">
   <img
  src={photoHero}
  alt="Photography series introduction"
  className="
    w-full object-cover aspect-[21/9]
    transition-all duration-500 ease-out
    hover:brightness-110
  "
/>
  </div>
</section>

        {/* Gallery */}
        <section className="max-w-[1600px] mx-auto px-6 py-24">
  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 auto-rows-[1fr] gap-12">
    {photos.map((photo, i) => (
      <div
        key={i}
        className={`
          ${photo.layout === "wide" ? "lg:col-span-2" : ""}
        `}
      >
        <Photo src={photo.src} alt={`Photography ${i + 1}`} />
      </div>
    ))}
  </div>
</section>

        {/* Exit dark mode */}

  <section className="max-w-6xl mx-auto px-6 py-32">
   <h1 className="text-center font-serifDisplay text-4xl md:text-7xl mb-4">
          <i>Fin </i>
        </h1>
  </section>

      </div>
    )
  }
