import Image from "next/image";

import { Badge, ProgressBar } from "!components";
import { useProperties, useSkeleton } from "!hooks";
import HeroCardMeta from "./meta";

export default function SwadeshPropertiesHeroCard() {
  const { data: property, isLoading, hasErrors } = useProperties("active");
  const LoadingAwareSkeleton = useSkeleton(isLoading);

  // TODO: Handle errors.
  // if (!isLoading && hasErrors) {
  // }

  return (
    <div className="relative bg-white rounded-xl shadow-2xl overflow-hidden flex flex-col md:flex-row">
      {/* [START]: Funding Status Badge */}
      <LoadingAwareSkeleton>
        <Badge purpose="Active" />
      </LoadingAwareSkeleton>
      {/* [END]: Funding Status Badge */}

      {/* [START]: Property Image */}
      <LoadingAwareSkeleton
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
      {/* [END]: Property Image */}

      <div className="bg-white p-10 md:w-8/12 w-full">
        {/* [START]: Title */}
        <LoadingAwareSkeleton>
          <h1 className="font-bold tracking-tight text-4xl mb-5">
            {property?.name}
          </h1>
        </LoadingAwareSkeleton>
        {/* [END]: Title */}

        {/* [START]: Location */}
        <LoadingAwareSkeleton>
          <div className="inline-flex items-center space-x-2 mb-5">
            <img src="/icons/location.svg" alt="Location Pin Icon" />
            <p className="leading-tight">{property?.location}</p>
          </div>
        </LoadingAwareSkeleton>
        {/* [END]: Location */}

        {/* [START]: Funding status */}
        <LoadingAwareSkeleton>
          <div className="md:w-80 w-full">
            <ProgressBar
              text="funded"
              currentProgress={property?.funding?.status}
            />
          </div>
        </LoadingAwareSkeleton>
        {/* [END]: Funding status */}

        {/* [START]: Meta */}
        <HeroCardMeta isLoading={isLoading} meta={property?.meta} />
        {/* [END]: Meta */}

        {/* [START]: CTA Invest now */}
        <LoadingAwareSkeleton>
          <div>
            <a href={property?.slug} data-cy="active-property-slug">
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
