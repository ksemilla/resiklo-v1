import { classNames } from "@/utils"
import { useEffect, useState } from "react"

export default function LineTracker(props: {
  width: string
  height: string
  trigger: boolean
  direction: "tr" | "tl" | "tt" | "tb"
  delay?: number
  retractDelay?: number
  color?: string
  duration?: number
}) {
  const {
    direction,
    delay = 0,
    color = "black",
    duration = 1000,
    retractDelay = 0,
    width,
    height,
  } = props
  const [trigger, setTrigger] = useState(false)

  useEffect(() => {
    if (props.trigger) {
      const enterT: NodeJS.Timeout = setTimeout(() => {
        setTrigger(true)
      }, delay)
      return () => {
        clearTimeout(enterT)
      }
    } else {
      const exitT: NodeJS.Timeout = setTimeout(() => {
        setTrigger(false)
      }, retractDelay)
      return () => {
        clearTimeout(exitT)
      }
    }
  }, [props.trigger])
  return (
    <div
      style={{
        width,
        height,
        overflow: "hidden",
        zIndex: 1000,
      }}
    >
      <div
        className={classNames(
          `bg-gray-400 h-full w-full transition-all duration-[${duration}ms] ease-linear`,
          direction === "tl" && !trigger ? `translate-x-[${width}]` : "",
          direction === "tr" && !trigger ? `-translate-x-[${width}]` : "",
          direction === "tt" && !trigger ? `translate-y-[${height}]` : "",
          trigger ? "translate-y-0 translate-x-0" : ``
        )}
        // style={{
        //   transform: `${trigger ? "translateX(0)" : `translateX(${width})`}`,
        // }}
      ></div>
    </div>
  )
}
