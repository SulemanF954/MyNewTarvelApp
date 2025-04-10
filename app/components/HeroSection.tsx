import Image from 'next/image'

const HeroSection = () => {
  return (
    <section className="container flex flex-col gap-20 py-10 md:gap-28 lg:py-20 xl:flex-row xl:gap-32">
      <div className="relative m-5 z-20 flex flex-1 flex-col xl:w-1/2">
        <Image
          src="/camp.svg"
          alt="camp"
          width={50}
          height={50}
          className="absolute left-[-5px] top-[-35px] w-10 lg:w-[40px]"
        />
        <h1 className="text-4xl lg:text-5xl font-bold leading-tight">Putuk Truno Camp Area</h1>
        <p className="text-lg mt-6 text-gray-600 xl:max-w-[520px]">
          We want to be on each of your journeys seeking the satisfaction of seeing the incorruptible beauty of nature. We can help you on an adventure around the world in just one app.
        </p>
        <div className="my-6 flex items-center gap-5 flex-wrap">
          <div className="flex items-center gap-2">
            {Array(5).fill(1).map((_, index) => (
              <Image
                src="/star.svg"
                key={index}
                alt="star"
                width={24}
                height={24}
              />
            ))}
          </div>
          <p className="text-gray-600">4.5 (200 reviews)</p>
        </div>
        <div className="flex flex-col gap-5 md:flex-row">
          <button className="bg-green-500 text-black py-3 px-6 rounded-md hover:bg-green-600 transition duration-200 ease-in-out">
            Download App
          </button>
          <button className="bg-gray-900 text-gray-200 py-3 px-6 rounded-md hover:bg-gray-800 transition duration-200 ease-in-out">
            How we Work?
          </button>
        </div>
      </div>

      <div className="relative flex flex-col items-start lg:ml-10 lg:mr-15 sm:ml-4 ">
        <div className="flex flex-col gap-3 py-8 px-7 w-[268px] rounded-3xl bg-green-600">
          <div className="flex justify-between items-center">
            <p className="font-bold text-gray-900">Location</p>
            <Image src="/close.svg"  alt="close" width={24} height={24} />
          </div>
          <p className="font-extrabold text-white text-xl font-serif">Aguas Calientes</p>
          <div className="flex justify-between mt-3">
            <div className="flex flex-col">
              <p className="font-bold text-gray-900">Distance</p>
              <p className="font-bold text-white">123.25 mi</p>
            </div>
            <div className="flex flex-col">
              <p className="font-bold text-gray-900">Elevation</p>
              <p className="font-bold text-white">4562.2 km</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default HeroSection
