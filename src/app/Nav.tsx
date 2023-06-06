"use client"

import { classNames } from "@/utils"
import Image from "next/image"
import Link from "next/link"
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
        <Link href="/">
          <Image
            src="/resiklo.png"
            width={180}
            height={0}
            alt="resiklo-lettering"
            priority
            className="h-auto"
          />
        </Link>
      </div>
      <div className="flex items-center space-x-10 h-[50px]">
        <Link
          href="/products"
          className="text-gray-800 h-full flex items-center border-b-2 border-transparent hover:border-blue-900 hover:text-blue-900"
        >
          PRODUCTS
        </Link>
        <Link
          href="/about"
          className="text-gray-800 h-full flex items-center border-b-2 border-transparent hover:border-blue-900 hover:text-blue-900"
        >
          ABOUT
        </Link>
        <Link
          href="/contact-us"
          className="h-full flex items-center border border-blue-900 rounded-full px-6 text-blue-900 hover:text-white hover:bg-blue-900"
        >
          CONTACT US
        </Link>
      </div>
    </nav>
  )
}

export default Nav
