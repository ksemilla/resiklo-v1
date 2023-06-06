import { products } from "@/const"

export default function Page() {
  const product = products.find((p) => p.slug === "ss-kit")
  return (
    <div className="bg-white">
      <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 px-4 py-24 sm:px-6 sm:py-32 lg:max-w-7xl lg:grid-cols-2 lg:px-8">
        <div>
          <h1 className="text-4xl font-bold">{product?.name}</h1>

          <p className="mt-4 text-gray-500">
            Stainless Steel Precious Plastic Shredder Laser Cut Kit Only
          </p>
        </div>
        <div>
          <div className="rounded-lg bg-gray-100 h-[500px] flex justify-center items-center">
            <i className="fa-solid fa-box text-9xl text-gray-500" />
          </div>
        </div>
      </div>
    </div>
  )
}
