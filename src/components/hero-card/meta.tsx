export default function HeroCardMeta() {
  return (
    <div
      data-cy="hero-property-meta"
      className="grid md:grid-cols-2 grid-cols-1 gap-4 mb-5"
    >
      {metadata.map(({ metric, value }) => (
        <div data-cy={metric} key={metric}>
          <div className="flex justify-between mb-3">
            <p>{metric}</p>
            <p className="font-bold">{value}</p>
          </div>
          <hr />
        </div>
      ))}
    </div>
  );
}

const metadata = [
  { metric: "Area", value: "52,277" },
  { metric: "Price psf", value: "₹12,338" },
  { metric: "Yield", value: "9.14%" },
  { metric: "Return Target", value: "18.1%" },
  { metric: "Funding Status", value: "63%" },
];
