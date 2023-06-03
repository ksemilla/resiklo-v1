"use client"
import { useEffect, useState } from "react"

export default function Home() {
  const [scrollPosition, setScrollPosition] = useState(0)

  const handleScroll = () => {
    const position = window.pageYOffset
    setScrollPosition(Math.floor(position / 20))
  }

  useEffect(() => {
    window.addEventListener("scroll", handleScroll)
    return () => {
      window.removeEventListener("scroll", handleScroll)
    }
  }, [])
  return (
    <main>
      <i
        className="fa-solid fa-gear fixed text-gray-600 text-opacity-30"
        style={{
          transform: `rotate(${scrollPosition}deg)`,
          fontSize: "1200px",
          bottom: "-600px",
          right: "-600px",
        }}
      ></i>
      <div className="max-w-5xl m-auto">
        <div className="text-center py-20">
          <Hero />
        </div>
      </div>
    </main>
  )
}

function sleep(time: number) {
  return new Promise((resolve) => setTimeout(resolve, time))
}

const Hero = () => {
  const [text, setText] = useState("")

  useEffect(() => {
    const textLoop: string[] = ["Reuse", "Reduce", "Recycle"]
    ;(async function () {
      while (true) {
        for (let i = 0; i < textLoop.length; i++) {
          for (let j = 0; j < textLoop[i].length; j++) {
            await sleep(180).then(() => {
              setText((t) => t + textLoop[i][j])
            })
          }
          await sleep(3000)
          for (let j = 0; j < textLoop[i].length; j++) {
            await sleep(80).then(() => {
              setText((t) => t.substring(0, t.length - 1))
            })
          }
        }
      }
    })()
  }, [])

  return (
    <section id="hero">
      <h1 className="animate-slide-right text-3xl font-medium text-gray-900 opacity-90">
        We are
      </h1>
      <h1 className="animate-slide-left text-8xl font-medium text-gray-900 opacity-90">
        Resiklo
      </h1>
      <span className="blinker text-3xl">{text}</span>
    </section>
  )
}
