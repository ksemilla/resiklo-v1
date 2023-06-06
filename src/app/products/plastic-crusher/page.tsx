import { products } from "@/const"

export default function Page() {
  const product = products.find((p) => p.slug === "plastic-crusher")
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
                Resiklo Plastic Crusher (RPC-300)
              </dd>
            </div>
            <div className="border-t border-gray-200 pt-4">
              <dt className="font-medium text-gray-900">Material</dt>
              <dd className="mt-2 text-sm text-gray-500">Mild Steel and GI</dd>
            </div>
            <div className="border-t border-gray-200 pt-4">
              <dt className="font-medium text-gray-900">Blades</dt>
              <dd className="mt-2 text-sm text-gray-500">Hardened Steel</dd>
            </div>
            <div className="border-t border-gray-200 pt-4">
              <dt className="font-medium text-gray-900">Axle Type</dt>
              <dd className="mt-2 text-sm text-gray-500">Single axle</dd>
            </div>
            <div className="border-t border-gray-200 pt-4">
              <dt className="font-medium text-gray-900">Power Input</dt>
              <dd className="mt-2 text-sm text-gray-500">
                4 kW - 500 rpm output
              </dd>
            </div>
            <div className="border-t border-gray-200 pt-4">
              <dt className="font-medium text-gray-900">Features</dt>
              <dd className="mt-2 text-sm text-gray-500">
                <ul>
                  <li>{`<`} 8 mm flake size</li>
                  <li>Blade Size: 300 mm</li>
                  <li>Rotary Blades: 3</li>
                  <li>Stationary Blades: 2</li>
                  <li>Capacity: {`<`} 100 kg/hr</li>
                  <li>Shredding Capability</li>
                  <li>50-100 kg/hr</li>
                  <li>Max 8mm Thick Plastics</li>
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
