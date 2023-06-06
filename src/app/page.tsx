"use client"
import Dialog from "@/components/Dialog"
import LineTracker from "@/components/LineTracker"
import Image from "next/image"
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
      <div className="max-w-5xl m-auto space-y-72 mb-72">
        <div className="text-center py-20">
          <Hero />
        </div>
        <div>
          <Products />
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
    0: 0.2,
    1: 0.2,
    2: 0.2,
    3: 0.2,
    4: 0.2,
    5: 0.2,
    6: 0.2,
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
            className="bg-gray-50 rounded-md w-full h-64  flex justify-center items-center pt-10 relative hover:shadow-sm hover:bg-gray-50 hover:border hover:border-gray-100"
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
              <Image
                src="/shredder-box-ss.png"
                width={180}
                height={180}
                alt="shredder-box-ss"
                className="h-auto"
              />
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
            className="bg-gray-50 rounded-md w-full h-64 flex justify-center items-center pb-14 pl-4 relative hover:shadow-sm hover:bg-gray-50 hover:border hover:border-gray-100"
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
              <Image
                src="/extrusion.png"
                width={180}
                height={200}
                alt="extrusion"
                className="h-auto"
              />
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
            className="bg-gray-50 rounded-md w-full h-64 flex justify-center items-center relative hover:shadow-sm hover:bg-gray-50 hover:border hover:border-gray-100"
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
              <Image
                src="/plastic-injection.png"
                width={140}
                height={200}
                alt="plastic-injection"
                className="h-auto"
              />
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
            className="bg-gray-50 rounded-md w-full h-64 relative flex justify-center items-center hover:shadow-sm hover:bg-gray-50 hover:border hover:border-gray-100"
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
              <Image
                src="/shredder.png"
                width={160}
                height={200}
                alt="shredder"
                className="h-auto"
              />
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
            className="bg-gray-50 rounded-md w-full h-64 flex justify-center items-center pb-14 pl-4 relative hover:shadow-sm hover:bg-gray-50 hover:border hover:border-gray-100"
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
              <Image
                src="/extrusion.png"
                width={200}
                height={200}
                alt="extrusion"
                className="h-auto"
              />
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
            className="bg-gray-50 rounded-md w-full h-64 flex justify-center items-center pt-12 relative hover:shadow-sm hover:bg-gray-50 hover:border hover:border-gray-100"
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
              <Image
                src="/shredder-box-ms.png"
                width={200}
                height={200}
                alt="shredder-box-ms"
                className="h-auto"
              />
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
            className="bg-gray-50 rounded-md w-full h-64 flex justify-center items-center relative hover:shadow-sm hover:bg-gray-50 hover:border hover:border-gray-100"
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
              <Image
                src="/cutting-blades-ss.png"
                width={160}
                height={200}
                alt="cutting-blades-ss"
                className="h-auto"
              />
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
        <a href="#">View all products</a>
      </div>
    </section>
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
