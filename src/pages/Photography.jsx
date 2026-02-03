
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
import photo13 from "../assets/img/photo/13.jpg"

const photos = [
  { src: photo01 },
  { src: photo02, span: true },
  { src: photo03 },
  { src: photo04 },
  { src: photo05 },
  { src: photo06, offset: true },
  { src: photo07 },
  { src: photo13 },
  { src: photo08, span: true },
  { src: photo09 },
  { src: photo10 },
  { src: photo11 },
  { src: photo12 },

]



  function Photo({ src, alt, className = "" }) {
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
useEffect(() => {
  window.scrollTo({ top: 0, behavior: "instant" })
}, [])

    return (
      <img
        ref={ref}
        src={src}
        alt={alt}
        className={`
          w-full rounded-lg
          transition-all duration-700 ease-out
          ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}
          ${className}
        `}
      />
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
       <section className="relative max-w-6xl mx-auto px-32 py-24 quote-invert">

  <div className="relative z-10 ">

    <p className="text-1xl md:text-6xl font-light leading-tight mb-12">
      “There is no such thing as inaccuracy in a photograph. All&nbsp;photographs are accurate. None of them is the truth.”
    </p>
    <p className="text-sm text-white/60 mb-36">
               Richard Avedon
              </p>
    
    
  </div>
</section>


       

        {/* Gallery */}
        <section className="max-w-[1600px] mx-auto px-6 py-18">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
    {photos.map((photo, i) => (
  <div
    key={i}
    className={`
      ${photo.span ? "lg:col-span-2" : ""}
      ${photo.offset ? "mt-20" : ""}
    `}
  >
    {photo.placeholder ? (
      <div className="w-full aspect-[3/4] rounded-lg bg-neutral-800/20" />
    ) : (
      <Photo
        src={photo.src}
        alt={`Photography ${i + 1}`}
      />
    )}
  </div>
))}

  </div>

        </section>
        {/* Exit dark mode */}
  <div ref={exitRef} className="h-24 w-full" />
  <section className="max-w-6xl mx-auto px-6 py-32">
   <h1 className="text-center font-serifDisplay text-4xl md:text-7xl mb-4">
          Fin
        </h1>
  </section>

      </div>
    )
  }
