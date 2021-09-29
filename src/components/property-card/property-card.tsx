import Image from "next/image";

import { LoadingAwareSkeleton, Badge } from "!components/index";
import { HeroCardMeta } from "!components/hero-card";

type PropertyCardProps = {
  isLoading: boolean;
  property: any;
};

export default function PropertyCard({
  isLoading,
  property,
}: PropertyCardProps) {
  return (
    <div className="relative h-auto bg-white rounded-xl shadow-lg overflow-hidden flex flex-col max-w-full">
      {/* Funding Status Badge */}
      <LoadingAwareSkeleton loading={isLoading}>
        <Badge purpose="Funded" />
      </LoadingAwareSkeleton>

      {/* Property Image */}
      <LoadingAwareSkeleton
        loading={isLoading}
        skeletonProps={{ count: 1, height: 455, width: 416 }}
      >
        <div className="relative h-96 overflow-hidden">
          <Image
            alt={property?.name}
            src={property?.imgUrl}
            layout="fill"
            objectFit="cover"
            objectPosition="center"
          />
        </div>
      </LoadingAwareSkeleton>

      <div className="bg-white p-10 w-full">
        {/* [START]: Title */}
        <LoadingAwareSkeleton loading={isLoading}>
          <h1 className="font-bold tracking-tight text-3xl mb-5">
            {property?.name}
          </h1>
        </LoadingAwareSkeleton>
        {/* [END]: Title */}

        {/* [START]: Location */}
        <LoadingAwareSkeleton loading={isLoading}>
          <div className="inline-flex items-center space-x-2 mb-5">
            <img src="/icons/location.svg" alt="Location Pin Icon" />
            <p className="leading-tight text-base whitespace-nowrap">
              {property?.location}
            </p>
          </div>
        </LoadingAwareSkeleton>
        {/* [END]: Location */}

        {/* [START]: Funding status */}
        <LoadingAwareSkeleton loading={isLoading}>
          <div className="flex flex-row space-x-3 items-center mb-5">
            <div className="h-1.5 md:w-52 w-full bg-gray-300 rounded-full">
              <div className="bg-royalGreen md:w-40 w-full h-full py-0.5 rounded-full" />
            </div>
            <p className="font-medium text-royalGreen whitespace-nowrap">
              {property?.funding?.status}% funded
            </p>
          </div>
        </LoadingAwareSkeleton>
        {/* [END]: Funding status */}

        {/* [START]: Meta */}
        <HeroCardMeta
          isLoading={isLoading}
          meta={property?.meta}
          gridLayout={false}
        />
        {/* [END]: Meta */}

        {/* [START]: CTA Invest now */}
        <LoadingAwareSkeleton loading={isLoading}>
          <div className="w-full">
            <a href={property?.slug}>
              <button className="bg-royalGoldenYellow w-full py-5 px-16 rounded-xl flex flex-row items-center justify-center space-x-2">
                <p className="text-base text-white font-semibold">Invest now</p>
                <img src="/icons/arrow-right.svg" alt="Right arrow" />
              </button>
            </a>
          </div>
        </LoadingAwareSkeleton>
        {/* [END]: CTA Invest now */}
      </div>
    </div>
  );
}
