import { products } from "@/const"

export default function Page() {
  const product = products.find((p) => p.slug === "plastic-injection")
  return (
    <div className="bg-white">
      <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 px-4 py-24 sm:px-6 sm:py-32 lg:max-w-7xl lg:grid-cols-2 lg:px-8">
        <div>
          <h1 className="text-4xl font-bold">{product?.name}</h1>
          <h2 className="mt-2 text-xl font-semibold tracking-tight text-gray-900">
            Technical Specifications
          </h2>
          <p className="mt-4 text-gray-500">
            The walnut wood card tray is precision milled to perfectly fit a
            stack of Focus cards. The powder coated steel divider separates
            active cards from new ones, or can be used to archive important task
            lists.
          </p>

          <dl className="mt-16 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 sm:gap-y-16 lg:gap-x-8">
            <div className="border-t border-gray-200 pt-4">
              <dt className="font-medium text-gray-900">Model</dt>
              <dd className="mt-2 text-sm text-gray-500">
                Plastic Injection Basic
              </dd>
            </div>
            <div className="border-t border-gray-200 pt-4">
              <dt className="font-medium text-gray-900">Material</dt>
              <dd className="mt-2 text-sm text-gray-500">
                <ul>
                  <li>Frame: Mild Steel and GI</li>
                  <li>Barrel: Stainless Steel</li>
                </ul>
              </dd>
            </div>
            <div className="border-t border-gray-200 pt-4">
              <dt className="font-medium text-gray-900">Weight</dt>
              <dd className="mt-2 text-sm text-gray-500">45kg</dd>
            </div>
            <div className="border-t border-gray-200 pt-4">
              <dt className="font-medium text-gray-900">Dimension</dt>
              <dd className="mt-2 text-sm text-gray-500">71 x 66 x 108 cm</dd>
            </div>
            <div className="border-t border-gray-200 pt-4">
              <dt className="font-medium text-gray-900">Power Input</dt>
              <dd className="mt-2 text-sm text-gray-500">400 W</dd>
            </div>
            <div className="border-t border-gray-200 pt-4">
              <dt className="font-medium text-gray-900">Features</dt>
              <dd className="mt-2 text-sm text-gray-500">
                <ul>
                  <li>Five (6) - Heat Bands</li>
                  <li>Manual Powered</li>
                  <li>Temperature Control</li>
                  <li>Rust Resistant Materials and Paints</li>
                </ul>
              </dd>
            </div>
            <div className="border-t border-gray-200 pt-4">
              <dt className="font-medium text-gray-900">
                Circuit Breaker Includes
              </dt>
              <dd className="mt-2 text-sm text-gray-500">
                <ul>
                  <li>Rockwool Insulation</li>
                  <li>Heat Shield</li>
                  <li>Manual Scissors Jack for Molds</li>
                </ul>
              </dd>
            </div>
          </dl>
        </div>
        <div>
          <img
            src={product?.src}
            alt="Walnut card tray with white powder coated steel divider and 3 punchout holes."
            className="rounded-lg bg-gray-100"
          />
        </div>
      </div>
    </div>
  )
}
