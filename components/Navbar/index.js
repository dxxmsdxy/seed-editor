"use client";
import { useState, useEffect } from "react";
import Link from 'next/link';
import { useDispatch, useSelector } from 'react-redux';
import { connectWalletAndLoadData, setWalletConnected } from '@/store/slices/walletSlice';
import { setQueueItems } from '@/store/slices/queueSlice';

import { MenuDesktop } from "./MenuDesktop";
import { MenuMobileContent, MenuMobileTrigger } from "./MenuMobile";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

export const Navbar = () => {
  const dispatch = useDispatch();
  const { connected, loading, error } = useSelector((state) => state.wallet);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(null);

  useEffect(() => {
    if (typeof window !== "undefined") {
      setIsMobile(window.innerWidth < 992);
    }
  }, []);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 992);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const handleConnect = async () => {
    try {
      const resultAction = await dispatch(connectWalletAndLoadData());
      console.log('Result action:', resultAction); // Add this line
      if (connectWalletAndLoadData.fulfilled.match(resultAction)) {
        console.log('Payload:', resultAction.payload); // Add this line
        dispatch(setQueueItems(resultAction.payload));
      } else if (connectWalletAndLoadData.rejected.match(resultAction)) {
        console.error('Failed to connect wallet and load data:', resultAction.error);
      }
    } catch (error) {
      console.error('Unexpected error during wallet connection:', error);
    }
  };

  const handleDisconnect = () => {
    dispatch(setWalletConnected(false));
    dispatch(setQueueItems([])); // Clear the queue when disconnecting
  };

  return (
    <div
      data-animation="default"
      data-collapse="medium"
      data-duration={400}
      data-easing="ease"
      data-easing2="ease"
      role="banner"
      className="navbar z-nav"
    >
      <DropdownMenu
        open={dropdownOpen}
        onOpenChange={() => setDropdownOpen(!dropdownOpen)}
      >
        <>
          <div className="navbar-container z-container">
            {!isMobile ? (
              <MenuDesktop
                dropdownOpen={dropdownOpen}
                setDropdownOpen={setDropdownOpen}
              />
            ) : (
              <MenuMobileTrigger
                dropdownOpen={dropdownOpen}
                setDropdownOpen={setDropdownOpen}
              />
            )}
            <div className="navbar-connect">
              {loading ? (
                <span>Loading...</span>
              ) : (
                <Link
                  href="#"
                  onClick={connected ? handleDisconnect : handleConnect}
                  className={`ui-button ${connected ? 'disconnect' : 'connect'}`}
                >
                  {connected ? 'D/C' : 'Connect'}
                </Link>
              )}
            </div>
          </div>
          {isMobile && (
            <MenuMobileContent
              dropdownOpen={dropdownOpen}
              setDropdownOpen={setDropdownOpen}
            />
          )}
        </>
      </DropdownMenu>
      {error && <div className="error-message">{error}</div>}
    </div>
  );
};
