import Image from 'next/image';
import React from 'react';

const Guide = () => {
  return (
    <section className="flex flex-col items-center">
      <div className="container w-full pb-24 px-6">
        <Image src="/camp.svg" alt="camp" width={50} height={50} />
        <p className="font-bold uppercase text-green-500 text-lg mt-1 mb-3">
          We are here for you
        </p>
        <div className="flex flex-wrap justify-between gap-5 lg:gap-10">
          <h2 className="font-bold text-2xl lg:text-2xl xl:max-w-[590px]">
            Guide You to Easy Path
          </h2>
          <p className="text-lg font-normal text-black xl:max-w-[520px]">
            Only with the hilink application you will no longer get lost and get lost again, because we already support offline maps when there is no internet connection in the field. Invite your friends, relatives, and friends to have fun in the wilderness through the valley and reach the top of the mountain.
          </p>
        </div>
      </div>

      <div className="flex justify-center container relative w-full px-6">
        <Image
          src="/boat.png"
          alt="boat"
          width={1440}
          height={580}
          className="w-full object-cover object-center rounded-xl 2xl:rounded-5xl"
        />

        <div className="absolute flex bg-white mt-2.5 py-8 pl-5 pr-7 gap-3 rounded-3xl border shadow-md md:left-[5%] lg:top-20">
          <Image
            src="/meter.svg"
            alt="meter"
            width={16}
            height={158}
            className="h-full w-auto"
          />
          <div className="flex justify-between flex-col">
            <div className="flex w-full flex-col">
              <div className="flex justify-between w-full">
                <p className="text-gray-500">Destination</p>
                <p className="font-bold text-green-500">48min</p>
              </div>
              <p className="font-bold mt-2">Aguas Calientes</p>
            </div>

            <div className="flex w-full flex-col mt-4">
              <p className="text-gray-500">Start track</p>
              <h4 className="font-bold mt-2 whitespace-nowrap">Wonorejo Pasuruan</h4>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Guide;
