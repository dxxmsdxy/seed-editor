"use client";
import React, {
  createContext,
  useContext,
  useState,
  useEffect,
  ReactNode,
} from "react";
import { bitsToSeed, seedToBits } from "@/lib/utils";

export interface SeedContextType {
  seed: BigInt;
  setSeed: React.Dispatch<React.SetStateAction<BigInt | bigint>>;
  selectedSeed: BigInt | null;
  setSelectedSeed: (value: BigInt | null) => void;
  savedSeeds: { seed: bigint | BigInt; url?: string }[];
  setSavedSeeds: (seeds: { seed: bigint | BigInt; url?: string }[]) => void;
  bitsArray: number[];
  setBitsArray: (bits: number[]) => void;
  saveSeed: () => void;
  selectSeed: (seed: BigInt) => void;
  deleteSeed: (seed: BigInt) => void;
  resetSeed: () => void;
  handleSeedChange: (value: string) => void;
  toggleBit: (index: number) => void;
  getRandomNumber: (min: number, max: number) => number;
  shuffleArray: (array: number[]) => number[];
  randomizeBits: () => void;
  showInscribeModal: boolean;
  setShowInscribeModal: (show: boolean) => void;
}

const SeedContext = createContext<SeedContextType | undefined>(undefined);

export const SeedProvider = ({ children }: { children: ReactNode }) => {
  const [bitsArray, setBitsArray] = useState<number[]>(new Array(100).fill(0));
  const [seed, setSeed] = useState<BigInt | bigint>(bitsToSeed(bitsArray));
  // Update the state initialization
  const [savedSeeds, setSavedSeeds] = useState<
    { seed: bigint | BigInt; url?: string }[]
  >([]);

  useEffect(() => {
    const localSavedSeeds = window.localStorage.getItem("savedSeeds");
    setSavedSeeds(
      localSavedSeeds
        ? JSON.parse(localSavedSeeds).map(
            ({ seed, url }: { seed: BigInt; url: string }) => ({
              seed: seed.toString(),
              url,
            })
          )
        : []
    );
  }, []);

  const [selectedSeed, setSelectedSeed] = useState<BigInt | null>(null);

  const [showInscribeModal, setShowInscribeModal] = useState(false);

  const resetSeed = () => {
    setSeed(BigInt(0));
    setBitsArray(new Array(100).fill(0));
  };

  const saveSeed = async () => {
    // const url = await generateTempUrl({
    //   width: 2880 / 4,
    //   height: 3840 / 4,
    //   seed: s,
    // });
    const updatedSavedSeeds = [
      ...savedSeeds,
      {
        seed,
        // url
      },
    ];
    setSavedSeeds(updatedSavedSeeds);
    window.localStorage.setItem(
      "savedSeeds",

      JSON.stringify(
        updatedSavedSeeds.map(({ seed, url }) => ({
          seed: seed.toString(),
          url,
        }))
      )
    );
    resetSeed();
  };

  const selectSeed = (seedValue: BigInt) => {
    setSelectedSeed(seedValue);
    setSeed(seedValue);
    setBitsArray(seedToBits(seedValue));
  };

  const deleteSeed = (seedValue: BigInt) => {
    const updatedSavedSeeds = savedSeeds.filter((s) => s.seed !== seedValue);
    setSavedSeeds(updatedSavedSeeds);
    window.localStorage.setItem(
      "savedSeeds",
      JSON.stringify(
        updatedSavedSeeds.map((BigIntSeed) => BigIntSeed.toString())
      )
    );
    if (seedValue === selectedSeed) {
      resetSeed();
    }
  };

  const toggleBit = (index: number) => {
    const newBitsArray = [...bitsArray];
    newBitsArray[index] = newBitsArray[index] === 0 ? 1 : 0;
    setBitsArray(newBitsArray);
    setSeed(bitsToSeed(newBitsArray));
  };

  const handleSeedChange = (value: string) => {
    const newSeed = BigInt(value);
    setSeed(newSeed);
    setBitsArray(seedToBits(newSeed));
  };

  const getRandomNumber = (min: number, max: number) => {
    return Math.floor(Math.random() * (max - min + 1) + min);
  };

  const shuffleArray = (array: number[]) => {
    const shuffledArray = array.slice();
    for (let i = shuffledArray.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [shuffledArray[i], shuffledArray[j]] = [
        shuffledArray[j],
        shuffledArray[i],
      ];
    }
    return shuffledArray;
  };

  const randomizeBits = () => {
    let newBitsArray = new Array(100).fill(0);
    const numSelected = getRandomNumber(3, 30);
    const shuffledIndices = shuffleArray(Array.from(Array(100).keys()));

    for (let i = 0; i < numSelected; i++) {
      newBitsArray[shuffledIndices[i]] = 1;
    }

    setBitsArray(newBitsArray);
    setSeed(bitsToSeed(newBitsArray));
  };

  return (
    <SeedContext.Provider
      value={{
        seed,
        setSeed,

        selectedSeed,
        setSelectedSeed,

        savedSeeds,
        setSavedSeeds,

        bitsArray,
        setBitsArray,

        saveSeed,
        selectSeed,
        deleteSeed,
        resetSeed,
        handleSeedChange,

        toggleBit,

        getRandomNumber,
        shuffleArray,
        randomizeBits,

        showInscribeModal,
        setShowInscribeModal,
      }}
    >
      {children}
    </SeedContext.Provider>
  );
};

export const useSeed = () => {
  const context = useContext(SeedContext);
  if (!context) {
    throw new Error("useSeedProvider must be used within a SeedProvider");
  }

  return context;
};
