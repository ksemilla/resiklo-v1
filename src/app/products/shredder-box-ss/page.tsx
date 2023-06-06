import { products } from "@/const"

export default function Page() {
  const product = products.find((p) => p.slug === "shredder-box-ss")
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
                Stainless Steel Precious Plastic Shredder
              </dd>
            </div>
            <div className="border-t border-gray-200 pt-4">
              <dt className="font-medium text-gray-900">Box Version</dt>
              <dd className="mt-2 text-sm text-gray-500">Version 2</dd>
            </div>
            <div className="border-t border-gray-200 pt-4">
              <dt className="font-medium text-gray-900">Material</dt>
              <dd className="mt-2 text-sm text-gray-500">
                Stainless Steel except for Hexagonal Shaft (Cold Rolled Steel)
                and fasteners
              </dd>
            </div>
            <div className="border-t border-gray-200 pt-4">
              <dt className="font-medium text-gray-900">Paint</dt>
              <dd className="mt-2 text-sm text-gray-500">Light Gray</dd>
            </div>
            <div className="border-t border-gray-200 pt-4">
              <dt className="font-medium text-gray-900">Power Input</dt>
              <dd className="mt-2 text-sm text-gray-500">1kW - 2kW</dd>
            </div>
            <div className="border-t border-gray-200 pt-4">
              <dt className="font-medium text-gray-900">Output Shaft</dt>
              <dd className="mt-2 text-sm text-gray-500">25mm</dd>
            </div>
            <div className="border-t border-gray-200 pt-4">
              <dt className="font-medium text-gray-900">Box Version</dt>
              <dd className="mt-2 text-sm text-gray-500">Version 2</dd>
            </div>
            <div className="border-t border-gray-200 pt-4">
              <dt className="font-medium text-gray-900">Package Inludes</dt>
              <dd className="mt-2 text-sm text-gray-500">
                <ul>
                  <li>All required fasteners</li>
                  <li>2x Flange Bearings - UCFL205-25</li>
                  <li>Cold Rolled Hexagonal Shaft (S20C)</li>
                  <li>4.7 mm Sieve</li>
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
