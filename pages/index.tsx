import Link from "next/link";
import Image from "next/image";

import { SwadeshPropertiesHeroCard } from "components/index";
import RootLayout from "layouts/index";

export default function Home() {
  return (
    // [START]: Layout
    <RootLayout>
      {/* [START]: Content */}
      <main data-cy="root-content">
        <div
          className="flex flex-col pt-10 bg-swadeshBgGreen"
          style={{ height: "580px" }}
        >
          {/* [START]: Header */}
          <div className="container mx-auto px-4 w-5/6" data-cy="header">
            <div className="flex flex-col md:flex-row md:items-center justify-between">
              <Link href="/">
                <a>
                  <Image
                    src="/icons/swadesh.svg"
                    alt="Swadesh Logo"
                    layout="intrinsic"
                    height="60"
                    width="150"
                    loading="eager"
                  />
                </a>
              </Link>
            </div>
          </div>
          {/* [END]: Header */}

          {/* [START]: Circles */}
          <div
            className="container relative h-full w-full overflow-hidden"
            data-cy="circles"
          >
            <img
              className="absolute left-0 top-0 bg-fixed"
              src="/icons/circles.svg"
              alt="Swadesh Circles"
            />
          </div>
          {/* [END]: Circles */}
        </div>

        {/* [START]: Active property */}
        <div
          className="relative mx-auto px-4 w-11/12 md:w-5/6"
          style={{ marginTop: "-25.5rem" }}
        >
          <h1 className="font-bold text-5xl md:text-6xl text-white mb-20">
            All properties
          </h1>
          <SwadeshPropertiesHeroCard />
        </div>
        {/* [END]: Active property */}

        {/* [START]: Past properties */}
        {/* [END]: Past properties */}
      </main>
      {/* [END]: Content */}
    </RootLayout>
    // [END]: Layout
  );
}
