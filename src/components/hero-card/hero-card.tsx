export default function SwadeshPropertiesHeroCard() {
  return (
    <div className="bg-white rounded-xl shadow-sm overflow-hidden flex flex-col sm:flex-row w-5/6">
      <div className="h-80 w-4/12">
        <img
          className="w-full h-full object-cover"
          src="https://i.imgur.com/6mX8dCD.png"
        />
      </div>
      <div className="bg-white p-10 w-8/12">
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
          <div className="h-1.5 w-52 bg-gray-300 rounded-full">
            <div className="bg-royalGreen w-40 h-full py-0.5 rounded-full" />
          </div>
          <p className="font-medium text-royalGreen">64% funded</p>
        </div>

        {/* [CTA] Invest now → */}
        <div className="flex">
          <button className="bg-royalGoldenYellow text-white text-sm py-5 px-10 rounded-xl">
            Invest now →
          </button>
        </div>
      </div>
    </div>
  );
}
