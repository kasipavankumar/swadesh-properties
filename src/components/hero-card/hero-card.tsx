import Image from "next/image";

import LoadingAwareSkeleton from "!components/loading-aware-skeleton";
import { useActiveProperty } from "!hooks/index";
import HeroCardMeta from "./meta";

export default function SwadeshPropertiesHeroCard() {
  const { property, isLoading, hasErrors } = useActiveProperty();

  // TODO: Handle errors.
  if (!isLoading && hasErrors) {
  }

  return (
    <div className="relative bg-white rounded-xl shadow-2xl overflow-hidden flex flex-col md:flex-row">
      {/* Funding Status Badge */}
      <LoadingAwareSkeleton loading={isLoading}>
        <span
          data-cy="funding-status-badge"
          className="absolute top-4 left-4 z-10 font-semibold tracking-wide py-1 px-3 rounded-full uppercase text-sm text-white bg-royalGoldenYellow"
        >
          {property?.funding?.active && "Active"}
        </span>
      </LoadingAwareSkeleton>

      {/* Property Image */}
      <LoadingAwareSkeleton
        loading={isLoading}
        skeletonProps={{ count: 1, height: 455, width: 416 }}
      >
        <div className="relative md:w-4/12 w-full overflow-hidden h-96 md:h-auto">
          <Image
            alt={property?.name}
            src={property?.imgUrl}
            layout="fill"
            objectFit="cover"
            objectPosition="center"
          />
        </div>
      </LoadingAwareSkeleton>

      <div className="bg-white p-10 md:w-8/12 w-full">
        {/* [START]: Title */}
        <LoadingAwareSkeleton loading={isLoading}>
          <h1 className="font-bold tracking-tight text-4xl mb-5">
            {property?.name}
          </h1>
        </LoadingAwareSkeleton>
        {/* [END]: Title */}

        {/* [START]: Location */}
        <LoadingAwareSkeleton loading={isLoading}>
          <div className="inline-flex items-center space-x-2 mb-5">
            <img src="/icons/location.svg" alt="Location Pin Icon" />
            <p className="leading-tight">{property?.location}</p>
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
        <HeroCardMeta isLoading={isLoading} meta={property?.meta} />
        {/* [END]: Meta */}

        {/* [START]: CTA Invest now */}
        <LoadingAwareSkeleton loading={isLoading}>
          <div className="flex">
            <a href={property?.slug}>
              <button className="bg-royalGoldenYellow md:w-auto w-full py-5 px-16 rounded-xl flex flex-row items-center justify-center space-x-2">
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
