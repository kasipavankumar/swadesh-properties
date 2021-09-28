import { SwadeshPropertiesHeroCard } from "components/index";

export default function Home() {
  return (
    <div
      className="flex flex-col items-center justify-center py-2 min-h-screen"
      style={{
        background: "#F5F3F0",
      }}
    >
      <SwadeshPropertiesHeroCard />
    </div>
  );
}
