// const { savedSeeds, setSavedSeeds } = useSeed();

//useEffect(() => {
//  //
//  const fetchData = async () => {
//    let seedsWithUrls = await Promise.all(
//      savedSeeds.map(async (seed) => {
//        if (!seed.url) {
//          const url = await generateTempUrl({
//            width: 2880 / 4,
//            height: 3840 / 4,
//            seed: seed.seed,
//          });
//          return { seed: seed.seed, url };
//        } else {
//          return seed;
//        }
//      })
//    );

//    setSavedSeeds(seedsWithUrls);
//  };

//  if (savedSeeds.some((i) => !i.url)) {
//    fetchData();
//  }
//}, [savedSeeds]);
