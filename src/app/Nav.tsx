"use client"

import { classNames } from "@/utils"
import Image from "next/image"
import { useEffect, useState } from "react"

const Nav = () => {
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
    <nav
      className={classNames(
        "p-4 sticky top-0 flex justify-between items-center bg-white opacity-90 z-50",
        scrollPosition > 0 ? "shadow-sm" : ""
      )}
    >
      <div>
        <Image
          src="/resiklo.png"
          width={180}
          height={0}
          alt="resiklo-lettering"
          priority
          className="h-auto"
        />
      </div>
      <div className="flex items-center space-x-10">
        <span>Products</span>
        <span>About</span>
        <span>Contact Us</span>
      </div>
    </nav>
  )
}

export default Nav
