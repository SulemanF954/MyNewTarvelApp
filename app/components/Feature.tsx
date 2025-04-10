import { FEATURES } from '@/constants'
import Image from 'next/image'
import React from 'react'

const Features = () => {
  return (
    <section className="flex flex-col items-center overflow-hidden bg-feature-bg bg-center bg-no-repeat py-24">
      <div className="container px-6 md:px-12 relative w-full flex justify-center lg:justify-end">
        <div className="flex flex-1 justify-center lg:min-h-[900px]">
          <Image
            src="/phone.png"
            alt="phone"
            width={440}
            height={1000}
            className="feature-phone"
          />
        </div>

        <div className="z-20 flex w-full flex-col lg:w-[60%]">
          <div className="relative">
            <Image
              src="/camp.svg"
              alt="camp"
              width={50}
              height={50}
              className="absolute left-[-5px] top-[-35px] w-10 lg:w-[40px]"
            />
            <h2 className="font-bold text-2xl lg:text-3xl lg:font-extrabold">Our Features</h2>
          </div>
          <ul className="mt-10 grid gap-10 md:grid-cols-2 lg:gap-20 lg:mt-20">
            {FEATURES.map((feature) => (
              <FeatureItem 
                key={feature.title}
                title={feature.title} 
                icon={feature.icon}
                description={feature.description}
              />
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}

type FeatureItemProps = {
  title: string;
  icon: string;
  description: string;
}

const FeatureItem = ({ title, icon, description }: FeatureItemProps) => {
  return (
    <li className="flex w-full flex-1 flex-col items-start">
      <div className="rounded-full p-4 lg:p-7 bg-green-500">
        <Image src={icon} alt={title} width={28} height={28} />
      </div>
      <h3 className="font-semibold text-lg lg:text-xl lg:font-extrabold mt-5 capitalize">
        {title}
      </h3>
      <p className="regular-16 mt-5 text-gray-600 lg:mt-[30px] lg:text-base">
        {description}
      </p>
    </li>
  )
}

export default Features
