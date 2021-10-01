const commonPropertiesData = {
  name: "The Pavilion III",
  location: "Outer Ring Road, Bangalore",
  funding: {
    status: 64,
    active: true,
  },
  meta: {
    area: "52,277",
    price: "₹12,338",
    yield: "9.14%",
    returnTarget: "18.1%",
    fundingStatus: "64%",
  },
  slug: "#",
};

const activeProperty = {
  ...commonPropertiesData,
  imgUrl: "https://i.imgur.com/6mX8dCD.png",
};

const pastProperties = [
  "https://i.imgur.com/dCNESFR.png",
  "https://i.imgur.com/fGLVsCv.png",
  "https://i.imgur.com/wNdsLxX.png",
  "https://i.imgur.com/vtnALdF.png",
  "https://i.imgur.com/wBEOMGh.png",
  "https://i.imgur.com/gaumHPl.png",
].map((imgUrl) => ({
  ...commonPropertiesData,
  funding: {
    ...commonPropertiesData.funding,
    status: 100,
    active: false,
  },
  meta: {
    ...commonPropertiesData.meta,
    fundingStatus: "100%",
  },
  imgUrl,
}));

export { activeProperty, pastProperties };
