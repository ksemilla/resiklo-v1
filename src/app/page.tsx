"use client"
import Dialog from "@/components/Dialog"
import LineTracker from "@/components/LineTracker"
import Image from "next/image"
import Link from "next/link"
import { useEffect, useState } from "react"

export default function Home() {
  const [scrollPosition, setScrollPosition] = useState(0)

  const handleScroll = () => {
    const position = window.pageYOffset
    setScrollPosition(Math.floor(position / 15))
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
        className="fa-solid fa-gear fixed text-gray-600 text-opacity-20 -z-50"
        style={{
          transform: `rotate(${scrollPosition}deg)`,
          fontSize: "1200px",
          bottom: "-600px",
          right: "-600px",
        }}
      ></i>
      <div className="max-w-5xl m-auto space-y-56 mb-72">
        <div className="text-center py-20">
          <Hero />
        </div>
        <div>
          <Products />
        </div>
        <div>
          <Content />
        </div>
      </div>
      <Footer />
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
      await sleep(2000)
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

const Products = () => {
  const initialOpacity = { 0: 1, 1: 1, 2: 1, 3: 1, 4: 1, 5: 1, 6: 1 }
  const initialZ = { 0: 1, 1: 1, 2: 1, 3: 1, 4: 1, 5: 1, 6: 1 }
  const blurredOpacity: { [key: number]: number } = {
    0: 0.1,
    1: 0.1,
    2: 0.1,
    3: 0.1,
    4: 0.1,
    5: 0.1,
    6: 0.1,
  }
  const lowZ: { [key: number]: number } = {
    0: -10,
    1: -10,
    2: -10,
    3: -10,
    4: -10,
    5: -10,
    6: -10,
  }

  const [translate1, setTranslate1] = useState(false)
  const [translate2, setTranslate2] = useState(false)
  const [translate3, setTranslate3] = useState(false)
  const [translate4, setTranslate4] = useState(false)
  const [translate5, setTranslate5] = useState(false)
  const [translate6, setTranslate6] = useState(false)
  const [translate7, setTranslate7] = useState(false)
  const setOpacity = (idx: number) => {
    setOpacityList({
      ...blurredOpacity,
      [idx]: 1,
    })
  }
  const setZ = (idx: number) => {
    setZList({
      ...lowZ,
      [idx]: 1,
    })
  }

  const [opacityList, setOpacityList] = useState<{ [key: number]: number }>(
    initialOpacity
  )
  const [zList, setZList] = useState<{ [key: number]: number }>(initialOpacity)
  return (
    <section id="products" className="max-w-3xl m-auto">
      <div className="grid grid-cols-3 gap-4">
        <div className="col-span-1 flex flex-col space-y-4 pt-20">
          <div
            className="bg-gray-50 border border-transparent rounded-md w-full h-64  flex justify-center items-center relative hover:shadow-sm hover:bg-gray-50 hover:border-gray-100"
            onMouseEnter={() => {
              setOpacity(0)
              setZ(0)
              setTranslate1(true)
            }}
            onMouseLeave={() => {
              setOpacityList(initialOpacity)
              setZList(initialZ)
              setTranslate1(false)
            }}
            style={{
              zIndex: zList[0],
            }}
          >
            <div style={{ opacity: opacityList[0] }}>
              <img src="/shredder-box-ss.png" alt="shredder-box-ss" />
            </div>
            <div className="absolute -top-[58px] right-[52px] pointer-events-none">
              <LineTracker
                width="70px"
                height="2px"
                trigger={translate1}
                direction="tr"
                delay={100}
                duration={100}
              />
            </div>
            <div className="absolute top-[-58px] pointer-events-none">
              <LineTracker
                width="2px"
                height="58px"
                trigger={translate1}
                direction="tt"
                duration={100}
                retractDelay={100}
              />
            </div>
            <div className="absolute -right-[250px] -top-20 z-auto pointer-events-none">
              <Dialog show={translate1} delay={200}>
                <p className="text-blue-700 font-medium text-xl px-1">
                  Shredder Box Stainless Steel
                </p>
              </Dialog>
            </div>
          </div>
          <div
            className="bg-gray-50 border border-transparent rounded-md w-full h-64 flex justify-center items-center pb-14 pl-4 relative hover:shadow-sm hover:bg-gray-50 hover:border-gray-100"
            onMouseEnter={() => {
              setOpacity(1)
              setTranslate2(true)
              setZ(1)
            }}
            onMouseLeave={() => {
              setOpacityList(initialOpacity)
              setZList(initialZ)
              setTranslate2(false)
            }}
            style={{
              zIndex: zList[1],
            }}
          >
            <div style={{ opacity: opacityList[1] }}>
              <img src="/extrusion.png" alt="extrusion" />
            </div>
            <div className="absolute top-[120px] -right-[50px] pointer-events-none">
              <LineTracker
                width="50px"
                height="2px"
                trigger={translate2}
                direction="tr"
                retractDelay={100}
                duration={100}
              />
            </div>
            <div className="absolute -top-[32px] -right-[50px] pointer-events-none">
              <LineTracker
                width="2px"
                height="154px"
                trigger={translate2}
                direction="tt"
                duration={100}
                delay={100}
              />
            </div>
            <div className="absolute -right-[250px] -top-20 pointer-events-none">
              <Dialog show={translate2} delay={200}>
                <p className="text-blue-700 font-medium text-xl px-1">
                  Basic Extrusion Machine (Ext-28)
                </p>
              </Dialog>
            </div>
          </div>
        </div>
        <div className="col-span-1 flex flex-col space-y-4 pt-32">
          <div
            className="bg-gray-50 border border-transparent rounded-md w-full h-64 flex justify-center items-center relative hover:shadow-sm hover:bg-gray-50 hover:border-gray-100"
            onMouseEnter={() => {
              setOpacity(2)
              setTranslate3(true)
              setZ(2)
            }}
            onMouseLeave={() => {
              setOpacityList(initialOpacity)
              setTranslate3(false)
              setZList(initialZ)
            }}
            style={{
              zIndex: zList[2],
            }}
          >
            <div style={{ opacity: opacityList[2] }}>
              <img src="/plastic-injection.png" alt="plastic-injection" />
            </div>
            <div className="absolute top-[120px] -right-[85px] pointer-events-none">
              <LineTracker
                width="85px"
                height="2px"
                trigger={translate3}
                direction="tr"
                retractDelay={100}
                duration={100}
              />
            </div>
            <div className="absolute -top-[32px] -right-[85px] pointer-events-none">
              <LineTracker
                width="2px"
                height="154px"
                trigger={translate3}
                direction="tt"
                duration={100}
                delay={100}
              />
            </div>
            <div className="absolute -right-[250px] -top-20 pointer-events-none">
              <Dialog show={translate3} delay={200}>
                <p className="text-blue-700 font-medium text-xl px-1">
                  Manual Plastic Injection Machine
                </p>
              </Dialog>
            </div>
          </div>
          <div
            className="bg-gray-50 border border-transparent rounded-md w-full h-64 relative flex justify-center items-center hover:shadow-sm hover:bg-gray-50 hover:border-gray-100"
            onMouseEnter={() => {
              setOpacity(3)
              setTranslate4(true)
              setZ(3)
            }}
            onMouseLeave={() => {
              setOpacityList(initialOpacity)
              setTranslate4(false)
              setZList(initialZ)
            }}
            style={{
              zIndex: zList[3],
            }}
          >
            <div style={{ opacity: opacityList[3] }}>
              <img src="/shredder.png" alt="shredder" />
            </div>
            <div className="absolute top-[120px] -left-[120px] pointer-events-none">
              <LineTracker
                width="120px"
                height="2px"
                trigger={translate4}
                direction="tl"
                retractDelay={100}
                duration={100}
              />
            </div>
            <div className="absolute -top-[32px] -left-[120px] pointer-events-none">
              <LineTracker
                width="2px"
                height="154px"
                trigger={translate4}
                direction="tt"
                duration={100}
                delay={100}
              />
            </div>
            <div className="absolute -left-[250px] -top-20 z-50 pointer-events-none">
              <Dialog show={translate4} delay={200}>
                <p className="text-blue-700 font-medium text-xl px-1">
                  Basic Shredder Machine
                </p>
              </Dialog>
            </div>
          </div>
        </div>
        <div className="col-span-1 flex flex-col space-y-4 ">
          <div
            className="bg-gray-50 border border-transparent rounded-md w-full h-64 flex justify-center items-center pb-14 pl-4 relative hover:shadow-sm hover:bg-gray-50 hover:border-gray-100"
            onMouseEnter={() => {
              setOpacity(4)
              setTranslate5(true)
              setZ(4)
            }}
            onMouseLeave={() => {
              setOpacityList(initialOpacity)
              setTranslate5(false)
              setZList(initialZ)
            }}
            style={{
              zIndex: zList[4],
            }}
          >
            <div style={{ opacity: opacityList[4] }}>
              <img src="/extrusion.png" alt="extrusion" />
            </div>
            <div className="absolute top-[123px] -left-[75px] pointer-events-none">
              <LineTracker
                width="75px"
                height="2px"
                trigger={translate5}
                direction="tl"
                retractDelay={100}
                duration={100}
              />
            </div>
            <div className="absolute -left-[400px] top-[100px] z-50 pointer-events-none">
              <Dialog show={translate5} delay={200}>
                <p className="text-blue-700 font-medium text-xl px-1">
                  Pro Extrusion Machine (Ext-30)
                </p>
              </Dialog>
            </div>
          </div>
          <div
            className="bg-gray-50 border border-transparent rounded-md w-full h-64 flex justify-center items-center pt-12 relative hover:shadow-sm hover:bg-gray-50 hover:border-gray-100"
            onMouseEnter={() => {
              setOpacity(5)
              setTranslate6(true)
              setZ(5)
            }}
            onMouseLeave={() => {
              setOpacityList(initialOpacity)
              setTranslate6(false)
              setZList(initialZ)
            }}
            style={{
              zIndex: zList[5],
            }}
          >
            <div style={{ opacity: opacityList[5] }}>
              <img src="/shredder-box-ms.png" alt="shredder-box-ms" />
            </div>
            <div className="absolute top-[120px] -left-[160px] pointer-events-none">
              <LineTracker
                width="160px"
                height="2px"
                trigger={translate6}
                direction="tl"
                retractDelay={100}
                duration={100}
              />
            </div>
            <div className="absolute top-[66px] -left-[160px] pointer-events-none">
              <LineTracker
                width="2px"
                height="56px"
                trigger={translate6}
                direction="tt"
                duration={100}
                delay={100}
              />
            </div>
            <div className="absolute -left-[300px] top-[20px] z-50 pointer-events-none">
              <Dialog show={translate6} delay={200}>
                <p className="text-blue-700 font-medium text-xl px-1">
                  Shredder Box (Mild Steel)
                </p>
              </Dialog>
            </div>
          </div>
          <div
            className="bg-gray-50 border border-transparent rounded-md w-full h-64 flex justify-center items-center relative hover:shadow-sm hover:bg-gray-50 hover:border-gray-100"
            onMouseEnter={() => {
              setOpacity(6)
              setTranslate7(true)
              setZ(6)
            }}
            onMouseLeave={() => {
              setOpacityList(initialOpacity)
              setTranslate7(false)
              setZList(initialZ)
            }}
            style={{
              zIndex: zList[6],
            }}
          >
            <div style={{ opacity: opacityList[6] }}>
              <img src="/cutting-blades-ss.png" alt="cutting-blades-ss" />
            </div>
            <div className="absolute top-[120px] -left-[120px] pointer-events-none">
              <LineTracker
                width="120px"
                height="2px"
                trigger={translate7}
                direction="tl"
                retractDelay={100}
                duration={100}
              />
            </div>
            <div className="absolute top-[66px] -left-[120px] pointer-events-none">
              <LineTracker
                width="2px"
                height="56px"
                trigger={translate7}
                direction="tt"
                duration={100}
                delay={100}
              />
            </div>
            <div className="absolute -left-[200px] top-[20px] z-50 pointer-events-none">
              <Dialog show={translate7} delay={200}>
                <p className="text-blue-700 font-medium text-xl px-1">
                  Cutting Blades
                </p>
              </Dialog>
            </div>
          </div>
        </div>
      </div>
      <div className="text-center">
        <Link
          href="/products"
          className="font-medium view-products hover:text-blue-900"
        >
          View all products <i className="fa-solid fa-arrow-right text-sm"></i>
        </Link>
      </div>
    </section>
  )
}

const Content = () => {
  return (
    <div className="py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto grid max-w-2xl grid-cols-1 items-start gap-x-8 gap-y-16 sm:gap-y-24 lg:mx-0 lg:max-w-none lg:grid-cols-2">
          <div className="lg:pr-4">
            <div className="relative overflow-hidden rounded-3xl bg-gray-900 px-6 pb-9 pt-64 shadow-2xl sm:px-12 lg:max-w-lg lg:px-8 lg:pb-8 xl:px-10 xl:pb-10">
              <img
                className="absolute inset-0 h-full w-full"
                src="/trash.jpg"
                alt=""
              />
            </div>
          </div>
          <div>
            <div className="text-base leading-7 text-gray-700 lg:max-w-lg">
              <p className="text-base font-semibold leading-7 text-indigo-600">
                Company values
              </p>
              <h1 className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                Protecting the future!
              </h1>
              <div className="max-w-xl">
                <p className="mt-6">
                  Humans are made to create. It is our gift and responsibility.
                  We feel the joy when we do and build things that helps one
                  another. Even more, imagine if you create and build things
                  that you recycle from ‘trash’. That would be great!
                </p>
                <p className="mt-8">
                  Here at{" "}
                  <span className="font-medium">Resiklo Machine Shop</span>, we
                  aim just that. We create and build things that helps people to
                  recycle wastes to usable products. We aim a global revolution
                  in managing and caring for our earth home.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

const Footer = () => {
  return (
    <footer
      style={{ minHeight: "300px" }}
      className="bg-black text-white opacity-80"
    >
      <div className="text-center pt-24">
        Copyright <i className="fa-regular fa-copyright"></i> 2021 Resiklo
        Machine Shop. All Rights Reserved.
      </div>
    </footer>
  )
}
