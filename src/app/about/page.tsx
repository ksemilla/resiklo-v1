export default function Example() {
  return (
    <div className="bg-white py-24 sm:py-32">
      <div className="mx-auto grid max-w-7xl gap-x-8 gap-y-20 px-6 lg:px-8 xl:grid-cols-3">
        <div className="max-w-2xl">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Meet our leadership
          </h2>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            We are the driving force behind seamless manufacturing. With a
            relentless focus on quality, efficiency, and safety, our team
            transforms materials into engineered products that impact lives.
          </p>
        </div>
        <ul
          role="list"
          className="grid gap-x-8 gap-y-12 sm:grid-cols-2 sm:gap-y-16 xl:col-span-2"
        >
          <li>
            <div className="flex items-center gap-x-6">
              <i className="fa-solid fa-circle-user text-gray-500 text-5xl"></i>
              <div>
                <h3 className="text-base font-semibold leading-7 tracking-tight text-gray-900">
                  Engr. Koshneir S. Jimenez
                </h3>
                <p className="text-sm font-semibold leading-6 text-indigo-600">
                  Business Owner
                </p>
                <p className="text-sm font-semibold leading-6 italic text-gray-700">
                  09750113677
                </p>
              </div>
            </div>
          </li>
          <li>
            <div className="flex items-center gap-x-6">
              <i className="fa-solid fa-circle-user text-gray-500 text-5xl"></i>
              <div>
                <h3 className="text-base font-semibold leading-7 tracking-tight text-gray-900">
                  Engr. Michael V. Vizconde
                </h3>
                <p className="text-sm font-semibold leading-6 text-indigo-600">
                  Business Owner
                </p>
                <p className="text-sm font-semibold leading-6 italic text-gray-700">
                  09563027631
                </p>
              </div>
            </div>
          </li>
          <li>
            <div className="flex items-center gap-x-6">
              <i className="fa-solid fa-circle-user text-gray-500 text-5xl"></i>
              <div>
                <h3 className="text-base font-semibold leading-7 tracking-tight text-gray-900">
                  John D. Sarte
                </h3>
                <p className="text-sm font-semibold leading-6 text-indigo-600">
                  Manufacturing Head
                </p>
                <p className="text-sm font-semibold leading-6 italic text-gray-700">
                  09064633280
                </p>
              </div>
            </div>
          </li>
        </ul>
      </div>
    </div>
  )
}
