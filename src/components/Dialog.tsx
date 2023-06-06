import { classNames } from "@/utils"
import { useEffect, useState } from "react"

export default function Dialog(props: {
  delay?: number
  show: boolean
  children: React.ReactNode
}) {
  const { delay = 0 } = props
  const [show, setShow] = useState(false)

  useEffect(() => {
    if (props.show) {
      const timeout = setTimeout(() => {
        setShow(true)
      }, delay)
      return () => {
        clearTimeout(timeout)
      }
    } else {
      setShow(false)
    }
  }, [props.show])

  return (
    <div
      className={classNames(
        "bg-white relative p-2 rounded-md shadow-sm transition-all duration-300 ease-linear border border-1 border-gray-100 z-50",
        !show ? "opacity-0" : "opacity-100"
      )}
    >
      {props.children}
    </div>
  )
}
