// TODO: Use Next Image Component.

import HeroCardMeta from "./meta";

export default function SwadeshPropertiesHeroCard() {
  return (
    <div className="relative bg-white rounded-xl shadow-2xl overflow-hidden flex flex-col md:flex-row">
      <span
        data-cy="funding-status-badge"
        className="absolute top-4 left-4 font-semibold tracking-wide py-1 px-3 rounded-full uppercase text-sm text-white bg-royalGoldenYellow"
      >
        Active
      </span>

      <div className="md:w-4/12 w-full">
        <img
          className="object-cover w-full h-full"
          src="https://i.imgur.com/6mX8dCD.png"
          // width={300}
          // height={500}
          // layout="responsive"
          // objectFit="cover"
        />
      </div>
      <div className="bg-white p-10 md:w-8/12 w-full">
        {/* Title */}
        <h1 className="font-bold tracking-tight text-4xl mb-5">
          The Pavilion III
        </h1>

        {/* Location */}
        <div className="inline-flex items-center space-x-2 mb-5">
          <img src="/icons/location.svg" alt="Location Pin Icon" />
          <p className="">Outer Ring Road, Bangalore</p>
        </div>

        {/* Funding status */}
        <div className="flex flex-row space-x-3 items-center mb-5">
          <div className="h-1.5 md:w-52 w-full bg-gray-300 rounded-full">
            <div className="bg-royalGreen md:w-40 w-full h-full py-0.5 rounded-full" />
          </div>
          <p className="font-medium text-royalGreen whitespace-nowrap">
            64% funded
          </p>
        </div>

        {/* Meta */}
        <HeroCardMeta />

        {/* [CTA] Invest now */}
        <div className="flex">
          <button className="bg-royalGoldenYellow md:w-auto w-full py-5 px-16 rounded-xl flex flex-row items-center justify-center space-x-2">
            <p className="text-base text-white font-semibold">Invest now</p>
            <img src="/icons/arrow-right.svg" alt="Right arrow" />
          </button>
        </div>
      </div>
    </div>
  );
}
