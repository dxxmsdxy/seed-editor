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
  savedSeeds: { seed: bigint | BigInt; url?: string }[];
  setSavedSeeds: (seeds: { seed: bigint | BigInt; url?: string }[]) => void;
  bitsArray: number[];
  setBitsArray: (bits: number[]) => void;
  saveSeed: () => void;
  selectSeed: (seed: BigInt) => void;
  deleteSeed: (seed: BigInt) => void;
  resetEditorState: () => void;
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
  const [editorSeed, setEditorSeed] = useState<BigInt | bigint>(bitsToSeed(bitsArray));
  // Update the state initialization
  const [savedSeeds, setSavedSeeds] = useState<
    { editorSeed: bigint | BigInt; url?: string }[]
  >([]);

  useEffect(() => {
    const localSavedSeeds = window.localStorage.getItem("savedSeeds");
    setSavedSeeds(
      localSavedSeeds
        ? JSON.parse(localSavedSeeds).map(
            ({ editorSeed, url }: { editorSeed: BigInt; url: string }) => ({
              editorSeed: editorSeed.toString(),
              url,
            })
          )
        : []
    );
  }, []);

  const [selectedSeed] = useState<BigInt | null>(null);

  const [showInscribeModal, setShowInscribeModal] = useState(false);

  const resetEditorState = () => {
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
        editorSeed,
        // url
      },
    ];
    setSavedSeeds(updatedSavedSeeds);
    window.localStorage.setItem(
      "savedSeeds",

      JSON.stringify(
        updatedSavedSeeds.map(({ editorSeed, url }) => ({
          editorSeed: editorSeed.toString(),
          url,
        }))
      )
    );
    resetEditorState();
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
    
  };

  return (
    <SeedContext.Provider
      value={{
        editorSeed,
        setEditorSeed,

        selectedSeed,

        savedSeeds,
        setSavedSeeds,

        bitsArray,
        setBitsArray,

        saveSeed,
        resetEditorState,
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
