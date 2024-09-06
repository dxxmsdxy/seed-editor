"use client";
import React, { createContext, useContext, useState, useEffect } from "react";
import {
  POSTAGE_FEE,
  MINER_FEE,
  INSCRIBE_PRICE,
  PAYEE_ADDRESS,
} from "@/constants";

const WalletContext = createContext();

export const WalletProvider = ({ children }) => {
  const [wallets, setWallets] = useState(undefined);

  const seedToBuff = (seed) => {
    const bytes = new bis.Buff.big(seed);

    return bytes;
  };

  const initWallet = async () => {
    while (!window.bis || !window.bis.api_initialised) {
      await new Promise((resolve) => setTimeout(resolve, 100));
    }

    // options are: 'mainnet', 'testnet'
    window.bis.highLevel.setNetwork("testnet");

    // check if wallets are already connected
    let wallets = window.bis.highLevel.retrieveCachedWallet();

    // if no cached wallets: connect
    if (!wallets) {
      wallets = await window.bis.highLevel.connectWallet(false, false);
    }

    setWallets(wallets);
    return wallets;
  };

  const checkInscriptionStatus = async (id) => {
    try {
      bis.highLevel.setNetwork("testnet");
      let name = await bis.highLevel.getInscriptionName(id);

      return name;
    } catch (e) {
      if (!(e instanceof Error)) {
        e = new Error(e);
      }
      return { error: e.message };
    }
  };

  const inscribe = async (seed, wallets) => {
    while (!bis.api_initialised) await bis.sleep(100);

    const buff = seedToBuff(seed);

    // 1. INSCRIBE METHOD FROM BIS
    let inscribeResponse = await bis.highLevel.inscribe(
      wallets,

      // - mime_type
      // "text/plain",
      "text/plain",

      // - file_data: bis.Buff
      buff,

      // - main_fee_rate: integer, miner fee rate in sats/vB
      // MINER FEE WHICH CAN BE TAKEN FROM https://bitinfocharts.com/comparison/bitcoin-transactionfees.html#3y / https://mempool.space/
      MINER_FEE,

      // - postage: integer, final inscription size in sats
      // formula: MINER_FEE * 100(vB)
      POSTAGE_FEE,

      // - payee_addr: string, inscribe price receiver
      PAYEE_ADDRESS,

      // - payment: integer, inscribe price in sats.
      // Use bigger than dust value (usually 546 sats) otherwise the transaction will not pass mempool test.
      // THIS IS THE ACTUAL PRICE (in satoshis)
      // 1000,
      INSCRIBE_PRICE,

      // - dry_run: bool, will not broadcast if set to true (for debugging)
      // true
      false
    );

    return inscribeResponse;
  };

  return (
    <WalletContext.Provider
      value={{
        wallets,
        setWallets,

        initWallet,
        inscribe,
        checkInscriptionStatus,
      }}
    >
      {children}
    </WalletContext.Provider>
  );
};

export const useWallet = () => {
  const context = useContext(WalletContext);
  if (!context) {
    throw new Error("useWalletProvider must be used within a WalletProvider");
  }

  return context;
};
