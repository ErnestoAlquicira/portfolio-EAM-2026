import { Link } from "react-router-dom"
import heroImage from "../assets/img/main.jpg"
import CommandNav from "../components/CommandNav"
import { useEffect, useState } from "react"
export default function Home() {
   const fullText = "el·e·ment"
  const [displayText, setDisplayText] = useState("")
  const [showDefinition, setShowDefinition] = useState(false)
  useEffect(() => {
  let index = 0
  let direction = "forward"
  let timeoutId

  function loop() {
    if (direction === "forward") {
      if (index <= fullText.length) {
        setDisplayText(fullText.slice(0, index) + "_")
        index++
        timeoutId = setTimeout(loop, 120)
      } else {
        setTimeout(() => {
          direction = "backward"
          loop()
        }, 3000)
      }
    } else {
      if (index >= 0) {
        setDisplayText(fullText.slice(0, index) + "_")
        index--
        timeoutId = setTimeout(loop, 60)
      } else {
        direction = "forward"
        index = 0
        setTimeout(loop, 600)
      }
    }
  }

  loop()

  const textTimer = setTimeout(() => {
    setShowDefinition(true)
  }, 2300)

  return () => {
    clearTimeout(timeoutId)
    clearTimeout(textTimer)
  }
}, [])
  return (
    <>
<>
  <CommandNav />
  {/* existing hero */}
</>

      {/* Hero section */}
      <section className="relative h-screen w-full">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
  backgroundImage: `url(${heroImage})`,
  filter: "brightness(0.6)",
}}
        />

        <div className="absolute inset-0 flex flex-col items-center justify-center">
         <h1 className="text-white text-6xl font-bold tracking-wider">
  {displayText}
</h1>
<p
  className={`transition-opacity duration-700 text-white text-4xl px-32 py-4 font-light text-center ${
    showDefinition ? "opacity-100" : "opacity-0"
  }`}
>
  <i>
    a part or aspect of something abstract, especially one that is essential or
    characteristic.
  </i>
</p>

        </div>
      </section>
    </>
  )
}
