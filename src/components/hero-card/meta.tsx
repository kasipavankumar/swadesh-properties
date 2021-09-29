import LoadingAwareSkeleton from "!components/loading-aware-skeleton";

export default function HeroCardMeta({ isLoading, meta }) {
  const metadata = [
    { metric: "Area", value: meta?.area },
    { metric: "Price psf", value: meta?.price },
    { metric: "Yield", value: meta?.yield },
    { metric: "Return Target", value: meta?.returnTarget },
    { metric: "Funding Status", value: meta?.fundingStatus },
  ];

  return (
    <div
      data-cy="hero-property-meta"
      className="grid md:grid-cols-2 grid-cols-1 gap-4 mb-5"
    >
      {metadata.map(({ metric, value }) => (
        <div data-cy={metric} key={metric}>
          <LoadingAwareSkeleton loading={isLoading}>
            <div className="flex justify-between mb-3">
              <p>{metric}</p>
              <p className="font-bold">{value}</p>
            </div>
          </LoadingAwareSkeleton>
          <hr />
        </div>
      ))}
    </div>
  );
}
