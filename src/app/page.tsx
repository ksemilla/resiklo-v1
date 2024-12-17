import Link from "next/link"

export default function Home() {
  return (
    <main>
      <div className="m-auto space-y-56 mb-72">
        <div className="text-center">
          <Hero />
        </div>
        <div>
          <Products />
        </div>
        <div>
          <Content />
        </div>
      </div>
    </main>
  )
}

const Hero = () => {
  return (
    <section id="hero">
      {/* <h1 className="animate-slide-right text-3xl">We are</h1>
      <h1 className="animate-slide-left text-8xl">Resiklo</h1> */}
      {/* <h1 className="text-[90px]">Protecting the future.</h1> */}
      <div className="flex justify-center items-center w-full max-h-[600px] overflow-hidden bg-[url('/hero.jpg')] bg-cover bg-center">
        <h1 className="text-5xl md:text-8xl font-bold my-56 text-white drop-shadow-xl">
          Protecting the future
        </h1>
      </div>
    </section>
  )
}

const products = [
  {
    source: "/shredder-box-ss.png",
    name: "Shredder Box",
    href: "/products/shredder-box-ss",
    alt: "shredder-box",
  },
  {
    source: "/extrusion.png",
    name: "Extrusion",
    href: "/products/basic-extrusion",
    alt: "extrusion",
  },
  {
    source: "/plastic-injection.png",
    name: "Plastic Injection",
    href: "/products/plastic-injection",
    alt: "plastic-injection",
  },
  {
    source: "/shredder.png",
    name: "Shredder",
    href: "/products/basic-shredder-machine",
    alt: "shredder",
  },
]

const Products = () => {
  return (
    <section id="products" className="max-w-2xl m-auto space-y-8">
      <h1 className="text-center text-3xl font-semibold">Featured Products</h1>
      <div className="grid grid-cols-2 gap-6">
        {products.map((product, i) => (
          <Link
            href={product.href}
            key={i}
            className="cursor-pointer hover:scale-110 duration-200 border border-transparent rounded-md hover:bg-gray-50 hover:shadow-md hover:border-gray-100"
          >
            <img src={product.source} alt={product.alt} />
            <p className="text-center mb-4 text-xl font-medium">
              {product.name}
            </p>
          </Link>
        ))}
      </div>
      <div className="text-center pt-16">
        <Link
          href="/products"
          className="text-xl font-medium duration-100 view-products border border-transparent py-6 px-10 rounded-full hover:text-white hover:bg-gray-900"
        >
          View all products <i className="fa-solid fa-arrow-right text-sm"></i>
        </Link>
      </div>
    </section>
  )
}

const Content = () => {
  return (
    <div className="relative py-24 sm:py-32">
      <div
        aria-hidden="true"
        className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
      >
        <div
          style={{
            clipPath:
              "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
          }}
          className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
        />
      </div>
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto grid max-w-2xl grid-cols-1 items-start gap-x-8 gap-y-16 sm:gap-y-24 lg:mx-0 lg:max-w-none lg:grid-cols-2">
          <div className="lg:pr-4">
            <div className="relative overflow-hidden rounded-3xl bg-gray-900 px-6 pb-9 pt-64 shadow-2xl sm:px-12 lg:max-w-lg lg:px-8 lg:pb-8 xl:px-10 xl:pb-10">
              <img
                className="absolute inset-0 h-full w-full"
                src="/trash.jpg"
                alt="plastic-bottles"
              />
            </div>
          </div>
          <div>
            <div className="text-2xl leading-7 text-gray-700">
              <p className="text-base font-semibold leading-7 text-indigo-600">
                Company values
              </p>
              <h1 className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                Protecting the future!
              </h1>
              <div>
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
      <div
        aria-hidden="true"
        className="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]"
      >
        <div
          style={{
            clipPath:
              "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
          }}
          className="relative left-[calc(50%+3rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%+36rem)] sm:w-[72.1875rem]"
        />
      </div>
    </div>
  )
}

export const Footer = () => {
  return (
    <footer
      style={{ minHeight: "300px" }}
      className="bg-black text-white opacity-90"
    >
      <div className="text-center pt-24">
        Copyright <i className="fa-regular fa-copyright"></i> 2021 Resiklo
        Machine Shop. All Rights Reserved.
      </div>
    </footer>
  )
}
