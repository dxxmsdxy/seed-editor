"use client";
import React, {
  createContext,
  ReactNode,
} from "react";

export interface SeedContextType {}

const SeedContext = createContext<SeedContextType | undefined>(undefined);

export const SeedProvider = ({ children }: { children: ReactNode }) => {

  return (
    <SeedContext.Provider>
      {children}
    </SeedContext.Provider>
  );
};