/*
  This example requires some changes to your config:
  
  ```
  // tailwind.config.js
  module.exports = {
    // ...
    plugins: [
      // ...
      require('@tailwindcss/forms'),
    ],
  }
  ```
*/
export default function ContactUS() {
  return (
    <div className="relative isolate bg-white">
      <div className="mx-auto max-w-7xl">
        <div className="relative px-6 pb-20 pt-24 sm:pt-32 lg:static lg:px-8 lg:py-48">
          <div className="mx-auto max-w-xl">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900">
              Get in touch with us!
            </h2>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              We are more than excited to discuss any topics with you! <br />{" "}
              Reach us to any of the contact details below.
            </p>
            <dl className="mt-10 space-y-4 text-base leading-7 text-gray-600">
              <div className="flex gap-x-4">
                <dt className="flex-none">
                  <span className="sr-only">Email</span>
                  <i className="fa-regular fa-envelope h-7 w-6 text-gray-400"></i>
                </dt>
                <dd>
                  <a
                    className="hover:text-gray-900"
                    href="mailto:resiklo.mfg@gmail.com"
                  >
                    resiklo.mfg@gmail.com
                  </a>
                </dd>
              </div>
              <div className="flex gap-x-4">
                <dt className="flex-none">
                  <span className="sr-only">Telephone</span>
                  <i className="fa-solid fa-phone h-7 w-6 text-gray-400"></i>
                </dt>
                <dd>
                  <a className="hover:text-gray-900" href="tel:(+64)9750113677">
                    09750113677
                  </a>
                </dd>
              </div>
              <div className="flex gap-x-4">
                <dt className="flex-none">
                  <span className="sr-only">Telephone</span>
                  <i className="fa-brands fa-facebook h-7 w-6 text-gray-400"></i>
                </dt>
                <dd>
                  <a
                    className="hover:text-gray-900"
                    href="https://www.facebook.com/profile.php?id=100065437691937"
                    target="_blank"
                  >
                    Facebook
                  </a>
                </dd>
              </div>
              <div className="flex gap-x-4">
                <dt className="flex-none">
                  <span className="sr-only">Address</span>
                  <i className="fa-regular fa-building h-7 w-6 text-gray-400"></i>
                </dt>
                <dd>
                  Salinas, Cavite
                  <br />
                  Philippines
                </dd>
              </div>
            </dl>
          </div>
        </div>
      </div>
    </div>
  )
}
