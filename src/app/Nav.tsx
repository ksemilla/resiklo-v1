import Image from "next/image"

export default () => {
  return (
    <nav className="p-4 sticky top-0 flex justify-between items-center">
      <div>
        <Image
          src="/resiklo.png"
          width={180}
          height={100}
          alt="resiklo-lettering"
        />
      </div>
      <div className="flex items-center space-x-10">
        <span>Products</span>
        <span>About</span>
        <span>Contact Us</span>
      </div>
    </nav>
  )
}
