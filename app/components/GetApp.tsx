import React from 'react'
import Image from 'next/image'

const GetApp = () => {
  return (
    <section className="w-full pb-10 pt-10 flex flex-col items-center justify-center bg-gray-900">
      <div className="container flex flex-col xl:flex-row items-start justify-between w-full space-y-12 xl:space-y-0 xl:space-x-12 px-6">
        <div className="flex flex-col items-start justify-center space-y-8 z-10 max-w-lg xl:max-w-md">
          <h2 className="text-lg font-bold lg:text-6xl text-gray-100">Get it for free now!</h2>
          <p className="text-2xl text-gray-100">Available on iOS and Android</p>
          <div className="flex flex-col space-y-3 xl:flex-row xl:space-x-4 xl:space-y-0">
          <div className="flex flex-col w-full gap-5 lg:flex-row md:flex-col sm:flex-col">
          <button className='bg-green-500 text-black py-3 px-6 rounded-md'>Download AppStore</button>
          <button className='bg-gray-200 text-gray-900 py-3 px-6 rounded-md'>Download PlayStore</button>
        </div>
          </div>
        </div>

        <div className="flex flex-1 justify-center xl:justify-end">
          <Image src="/phones.png" alt="phones" width={550} height={870} />
        </div>
      </div>
    </section>
  )
}

export default GetApp
