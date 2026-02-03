import img01 from "../assets/img/webdesign/1.jpg"
import img02 from "../assets/img/webdesign/2.jpg"
import img03 from "../assets/img/webdesign/3.jpg"
import img04 from "../assets/img/webdesign/4.jpg"
import img05 from "../assets/img/webdesign/5.jpg"
import { useRef, useEffect, useState } from "react"

function Reveal({ children }) {
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
      { threshold: 0.15 }
    )

    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [])

  return (
    <div
      ref={ref}
      className={`transition-all duration-1000 ease-out ${
        visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
      }`}
    >
      {children}
    </div>
  )
}

const imageClass = `
  w-full rounded-xl
  border border-black/10
  shadow-sm
  transition-transform transition-shadow duration-300
  md:scale-[1.06]
  md:hover:-translate-y-1
  md:hover:shadow-md
`

export default function Webdesign() {
  return (
    <div className="relative bg-white text-black overflow-hidden">
      {/* subtle paper texture */}
      <div
        className="
          pointer-events-none
          absolute inset-0
          opacity-[0.035]
          bg-[radial-gradient(circle_at_1px_1px,rgba(0,0,0,0.6)_1px,transparent_0)]
          bg-[size:24px_24px]
        "
      />

      {/* Header */}
      <section className="relative z-10 max-w-4xl mx-auto px-6 pt-40 pb-24">
        <h1 className="font-serifDisplay text-4xl md:text-7xl mb-4">
          Web Design
        </h1>
        <p className="text-sm text-black/60 uppercase tracking-widest mb-8">
          Selected enterprise & pharmaceutical projects
        </p>

        <div className="space-y-6">
          <p className="text-lg leading-relaxed max-w-2xl">
            I design and build interactive, responsive web modules for
            pharmaceutical brands, working within strict branding, regulatory,
            and technical constraints.
          </p>
          <p className="text-lg leading-relaxed max-w-2xl">
            My work focuses on clarity, usability, and scalable systems across
            products and campaigns.
          </p>
        </div>
      </section>

      {/* Projects */}
      <Reveal>
        <section className="relative z-10 max-w-6xl mx-auto px-6 pb-32">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
            <img src={img01} alt="" className={imageClass} loading="lazy" />
            <div>
              <h2 className="text-3xl font-medium mb-4">
                PSL Group Core Product
              </h2>
              <p className="text-sm text-black/60 mb-3">
                Built under strict regulatory and branding constraints.
              </p>
              <p className="mb-3">Quiz-like interactive learning module.</p>
              <p className="mb-3">
                Built the full template under company branding and regulatory
                constraints, implementing interactive and responsive behavior.
              </p>
              <p className="mb-6">
                Core PSL Group product reused across multiple programs.
              </p>
              <a
                href="https://d.peerdirect.com/12399CQ01/12399CQ01_Hub/module1"
                target="_blank"
                rel="noreferrer"
                className="text-sm underline underline-offset-4"
              >
                View project (requires access)
              </a>
            </div>
          </div>
        </section>
      </Reveal>

      <Reveal>
        <section className="relative z-10 max-w-6xl mx-auto px-6 pb-32">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
            <img src={img02} alt="" className={imageClass} loading="lazy" />
            <div className="md:order-1">
              <h2 className="text-3xl font-medium mb-4">
                Pfizer Campaign
              </h2>
              <p className="text-sm text-black/60 mb-3">
                Built under strict regulatory and branding constraints.
              </p>
              <p className="mb-3">Large-scale interactive campaign.</p>
              <p className="mb-3">
                Designed and implemented branded, responsive templates for
                interactive modules under Pfizer guidelines.
              </p>
              <p className="mb-6">
                High-visibility campaign for a global pharmaceutical brand.
              </p>
              <a
                href="https://d.md-fi.com/12044FI04/Modules/main?&pkey=10995738c847_5426_4f17_97d0_42"
                target="_blank"
                rel="noreferrer"
                className="text-sm underline underline-offset-4"
              >
                View project (requires access)
              </a>
            </div>
          </div>
        </section>
      </Reveal>

      <Reveal>
        <section className="relative z-10 max-w-6xl mx-auto px-6 pb-32">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
            <img src={img03} alt="" className={imageClass} loading="lazy" />
            <div>
              <h2 className="text-3xl font-medium mb-4">
                Interactive Carousel Program
              </h2>
              <p className="text-sm text-black/60 mb-3">
                Built under platform and regulatory constraints.
              </p>
              <p className="mb-3">Educational carousel-based module.</p>
              <p className="mb-3">
                Implemented interactive navigation patterns and responsive
                layouts within platform standards.
              </p>
              <p className="mb-6">
                Introduced a more dynamic interaction model into the ecosystem.
              </p>
              <a
                href="https://d.md-fi.com/12348FI01/Modules/module1"
                target="_blank"
                rel="noreferrer"
                className="text-sm underline underline-offset-4"
              >
                View project (requires access)
              </a>
            </div>
          </div>
        </section>
      </Reveal>

      <Reveal>
        <section className="relative z-10 max-w-6xl mx-auto px-6 pb-32">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
            <img src={img04} alt="" className={imageClass} loading="lazy" />
            <div className="md:order-1">
              <h2 className="text-3xl font-medium mb-4">
                Highly Customized Program
              </h2>
              <p className="text-sm text-black/60 mb-3">
                Built under strict regulatory and branding constraints.
              </p>
              <p className="mb-3">
                Program built from mixed client content and internal templates.
              </p>
              <p className="mb-3">
                Integrated multiple content sources into a single customized,
                responsive experience.
              </p>
              <p className="mb-6">
                One of the most customized implementations on the platform.
              </p>
              <a
                href="http://d.md-fi.com/12500FI11/Modules/main"
                target="_blank"
                rel="noreferrer"
                className="text-sm underline underline-offset-4"
              >
                View project (requires access)
              </a>
            </div>
          </div>
        </section>
      </Reveal>

      <Reveal>
        <section className="relative z-10 max-w-6xl mx-auto px-6 pb-32">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
            <img src={img05} alt="" className={imageClass} loading="lazy" />
            <div>
              <h2 className="text-3xl font-medium mb-4">
                Bayer Launch Program
              </h2>
              <p className="text-sm text-black/60 mb-3">
                Built under strict regulatory and branding constraints.
              </p>
              <p className="mb-3">
                Introduction program for Bayer’s pulmonology specialty.
              </p>
              <p className="mb-3">
                Built interactive, responsive modules aligned with launch
                requirements.
              </p>
              <p className="mb-6">
                Bayer’s first program in this specialty.
              </p>
              <a
                href="https://d.md-memo.com/11659MO02/11659MO02-p1/main?&pkey=998151ff845_588c_4438_b538_94n"
                target="_blank"
                rel="noreferrer"
                className="text-sm underline underline-offset-4"
              >
                View project (requires access)
              </a>
            </div>
          </div>
        </section>
      </Reveal>
    </div>
  )
}
