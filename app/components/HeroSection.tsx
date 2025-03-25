import Image from 'next/image'


const HeroSection = () => {
  return (
    <section className='xl:flex-row gap-20 py-10 pb-32 md:gap-28 lg:py-20 max-container flex flex-col padding-container'>
      <div className="relative m-5 z-20 flex flex-1 flex-col xl:w-1/2">
        <Image
          src="/camp.svg"
          alt="camp"
          width={50}
          height={50}
          className='absolute left-[-5px] top-[-35px] w-10 lg:w-[40px]'
        />
        <h1 className="text-5xl font-bold">Putuk Truno Camp Area</h1>
        <p className="text-lg mt-6 text-gray-600 xl:max-w-[520px]">
          We want to be on each of your journeys seeking the satisfaction of seeing the incorruptible beauty of nature. We can help you on an adventure around the world in just one app
        </p>
        <div className="my-11 flex gap-5 flex-wrap">
          <div className="flex items-center gap-2">
            {Array(5).fill(1).map((_, index) => (
              <Image
                src="/star.svg"
                key={index}
                alt='star'
                width={24}
                height={24}
              />
            ))}
          </div>
          <p className="text-gray-600">4.5 (200 reviews)</p>
        </div>
        <div className="flex flex-col w-full gap-5 nd:flex-row sm:flex-row">
          <button className='bg-green-500 text-black py-3 px-6 rounded-md'>Download App</button>
          <button className='bg-gray-900 text-gray-200 py-3 px-6 rounded-md'>How we Work?</button>
        </div>
      </div>

      <div className='relative flex flex-1 items-start border-1 border-green-600'>
        <div className='flex py-8 px-7 relative z-20 w-[268px] flex-col rounded-3xl bg-green-600'>
          <div className='flex flex-col'>
            <div className='flex justify-between'>
              <p className='font-bold text-gray-900'>Location</p>
              <Image src = "/close.svg" alt='close' width={24} height={24}/>
            </div>
            <p className="font-extrabold font-serif text-white">Aguas Calientes</p>
            <div className='flex justify-between'>
             <div className='flex flex-col'>
               <p className="font-bold text-gray-900">Distance</p>
               <p className='font-bold text-white'>123.25 mi</p>
             </div>
             <div className='flex flex-col'>
               <p className="font-bold text-gray-900">Evalation</p>
               <p className='font-bold text-white'>12 km</p>
             </div>
            </div>
          </div>
        </div>
      </div>


    </section>
  )
}

export default HeroSection
