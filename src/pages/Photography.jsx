  import { useState, useRef, useEffect } from "react"
  import heroPhoto from "/src/assets/img/photo/main.jpg"
  const photos = [
    { src: "/src/assets/img/photo/01.jpg" },
    { src: "/src/assets/img/photo/02.jpg", span: true },
    { src: "/src/assets/img/photo/03.jpg" },
    { src: "/src/assets/img/photo/04.jpg" },
    { src: "/src/assets/img/photo/05.jpg" },
    { src: "/src/assets/img/photo/06.jpg", offset: true },
    { src: "/src/assets/img/photo/07.jpg" },
    { src: "/src/assets/img/photo/08.jpg", span: true },
    { src: "/src/assets/img/photo/09.jpg" },
    { src: "/src/assets/img/photo/10.jpg" },
    { src: "/src/assets/img/photo/11.jpg" },
    { src: "/src/assets/img/photo/12.jpg" },
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
    const [isDark, setIsDark] = useState(false)
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
<section className="relative w-full overflow-hidden">
  <img
    src="/src/assets/img/photo/main.jpg"
    alt="Photography hero"
    className="
      w-full
      h-[70vh]
      md:h-[65vh]
      lg:h-[60vh]
      object-cover
    "
  />
</section>



        {/* Intro */}
       <section className="relative max-w-6xl mx-auto px-6 py-32">
  <div className="relative z-10 max-w-xl">

    <p className="text-2xl md:text-3xl font-light leading-tight mb-6">
      Observational work across objects, spaces, and surfaces.
      Minimal intervention. Natural light where possible.
    </p>
  </div>
</section>


        {/* Theme trigger */}
        <div ref={triggerRef} className="h-24 w-full" />

        {/* Gallery */}
        <section className="max-w-[1600px] mx-auto px-6 py-32">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
    {photos.map((photo, i) => (
      <div
        key={i}
        className={`
          ${photo.span ? "lg:col-span-2" : ""}
          ${photo.offset ? "mt-20" : ""}
        `}
      >
        <Photo
          src={photo.src}
          alt={`Photography ${i + 1}`}
        />

        {photo.caption && (
          <p className="mt-3 text-xs text-white/60 max-w-sm">
            {photo.caption}
          </p>
        )}
      </div>
    ))}
  </div>

        </section>
        {/* Exit dark mode */}
  <div ref={exitRef} className="h-24 w-full" />
  <section className="max-w-6xl mx-auto px-6 py-32">
    <p className="text-lg leading-relaxed max-w-xl">
      Closing sentence. Reflection. Or simply space.
    </p>
  </section>

      </div>
    )
  }
