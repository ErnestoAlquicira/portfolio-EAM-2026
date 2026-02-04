import { Link } from "react-router-dom"
import heroImage from "../assets/img/main.jpg"
import CommandNav from "../components/CommandNav"
import MobileNav from "../components/MobileNav"
import { useEffect, useState } from "react"
export default function Home() {
 const words = [
  {
    word: "e•le•ment",
    definition:
      "a part or aspect of something abstract, especially one that is essential",
  },
  {
    word: "struc•ture",
    definition:
      "the arrangement of and relations between the parts of something complex",
  },
  {
    word: "sys•tem",
    definition:
      "a set of principles or procedures according to which something is done",
  },

  // NEW WORDS ↓↓↓

  {
    word: "form",
    definition:
      "the visible shape or configuration of something, as distinct from its substance",
  },
  {
    word: "se•quence",
    definition:
      "a particular order in which related events or elements follow each other",
  },
  {
    word: "rhy•thm",
    definition:
      "a regular pattern of movement or change, especially one that feels intentional",
  },
  {
    word: "com•po•si•tion",
    definition:
      "the way in which different elements are arranged to create a unified whole",
  },
]

const [wordIndex, setWordIndex] = useState(0)
const [fadeOut, setFadeOut] = useState(false)
  const [displayText, setDisplayText] = useState("")
  const [showDefinition, setShowDefinition] = useState(false)
  useEffect(() => {
  let index = 0
  let direction = "forward"
  let timeoutId

  const currentWord = words[wordIndex].word

  function loop() {
    if (direction === "forward") {
      if (index <= currentWord.length) {
        setDisplayText(currentWord.slice(0, index) + "_")
        index++
        timeoutId = setTimeout(loop, 120)
      } else {
        setShowDefinition(true)

        // pause fully written word
        timeoutId = setTimeout(() => {
          setFadeOut(true)

          // wait for fade, then move to next word
          timeoutId = setTimeout(() => {
            setFadeOut(false)
            setShowDefinition(false)
            setDisplayText("")
            setWordIndex((prev) => (prev + 1) % words.length)
          }, 1200)
        }, 2800)
      }
    }
  }

  loop()

  return () => clearTimeout(timeoutId)
}, [wordIndex])

  return (
  <>
    <MobileNav />
    <CommandNav />

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
         <h1
  className={`text-white text-8xl tracking-wider transition-opacity duration-1000 ${
    fadeOut ? "opacity-0" : "opacity-100"
  }`}
><i>
  {displayText}</i>
</h1>

<p
  className={`transition-opacity duration-700 text-white
    text-lg md:text-2xl
    px-6 md:px-32
    py-4 font-light text-center
    ${showDefinition && !fadeOut ? "opacity-100" : "opacity-0"}
  `}
>
  {words[wordIndex].definition}
</p>


        </div>
      </section>
    </>
  )
}
