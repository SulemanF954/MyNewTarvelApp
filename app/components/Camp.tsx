import Image from "next/image";
import { PEOPLE_URL } from "@/constants";

interface CampProps {
  backgroundImage: string;
  title?: string;
  subtitle?: string;
  peopleJoined?: string;
}

const CampSite = ({
  backgroundImage,
  title,
  subtitle,
  peopleJoined,
}: CampProps) => {
  return (
    <div
    style={{backgroundImage: `url(${backgroundImage})`}} 

      className={`h-full w-full min-w-[900px]  bg-cover bg-no-repeat lg:rounded-r-5xl 2xl:rounded-5xl`}
    >
      <div className="flex flex-col h-full items-start justify-between p-6 lg:px-12 lg:py-10">
        <div className="flex gap-2">
          <div className="rounded-full bg-green-600 p-4">
            <Image src="/folded-map.svg" alt="map" width={28} height={28} />
          </div>
          <div className="flex flex-col gap-1">
            <h4 className="font-semibold text-white">{title}</h4>
            <p className="text-white font-medium">{subtitle}</p>
          </div>
        </div>
        <div className="flex items-center gap-2 mt-4">
          <span className="flex -space-x-4 overflow-hidden">
            {PEOPLE_URL.map((url) => (
              <Image
                className="inline-block rounded-full ring-2 ring-white"
                src={url}
                key={url}
                alt="people"
                width={52}
                height={52}
              />
            ))}
          </span>
          <p className="font-bold text-white mt-4">{peopleJoined}</p>
        </div>
      </div>
    </div>
  );
};

const Camp = () => {
  return (
    <section className="relative flex flex-col lg:mb-10 py-10 lg:py-20 xl:mb-20">
      <div className="flex h-[340px] w-full items-start justify-start gap-8 overflow-x-auto lg:h-[400px] xl:h-[640px]">
        <CampSite
          backgroundImage='./img-1.png'
          title="Putuk Truno Camp Area"
          subtitle="Prigen, Pasuruan"
          peopleJoined="50+ Joined"
        />
      </div>
      <div className="flex justify-end mt-10 px-6 lg:-mt-60 lg:mr-6">
        <div className="bg-green-500 p-8 lg:max-w-[400px] xl:max-w-[634px] xl:rounded-5xl xl:px-16 xl:py-20 relative w-full overflow-hidden rounded-3xl">
          <h2 className="text-white text-xl lg:text-2xl xl:text-3xl 2xl:text-5xl font-extrabold capitalize">
            Feeling Lost And Not Knowing The Way?
          </h2>
          <p className="text-white text-sm xl:text-base mt-5">
            Starting from the anxiety of the climbers when visiting a new climbing location, the possibility of getting lost is very large. That's why we are here for those of you who want to start an adventure
          </p>
          <Image 
            src="/quote.svg"
            alt="camp-2"
            width={186}
            height={219}
            className="absolute bottom-4 right-4 lg:bottom-8 lg:right-8"
          />
        </div>
        {/* <div className="bg-[url(/img-1.png)]"></div> */}
      </div>
    </section>
  );
};

export default Camp;
