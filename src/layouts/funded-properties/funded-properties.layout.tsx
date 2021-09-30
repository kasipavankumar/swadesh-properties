import { PropertyCard } from "!components";
import { useProperties } from "!hooks";

export default function FundedPropertiesLayout() {
  // TODO: Handle errors
  const { data, hasErrors, isLoading } = useProperties("funded");

  return (
    <>
      <div className="relative mx-auto mb-36 px-4 w-11/12 md:w-5/6">
        <h1 className="font-bold text-5xl md:text-6xl text-black mt-20 mb-16">
          Past properties
        </h1>
        <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8">
          {data?.map((property: any, idx: number) => (
            <PropertyCard
              key={`${property?.name}-${idx}`}
              isLoading={isLoading}
              property={property}
            />
          ))}
        </div>
      </div>
    </>
  );
}
