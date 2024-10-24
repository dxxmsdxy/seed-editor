"use client";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from 'react-redux';
import { connectWalletAndLoadData, disconnectWalletAndClearQueue } from '@/store/slices/walletSlice';
import { MenuDesktop } from "./MenuDesktop";
import { MenuMobileContent, MenuMobileTrigger } from "./MenuMobile";
import { DropdownMenu } from "@/components/UI/DropdownMenu";




//===============================================//

export const Navbar = () => {
  const dispatch = useDispatch();
  const { connected, loading, error } = useSelector((state) => state.wallet);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(null);

  const handleConnect = async () => {
    try {
      const resultAction = await dispatch(connectWalletAndLoadData());
      if (connectWalletAndLoadData.fulfilled.match(resultAction)) {
        console.log('Wallet connected and data loaded:', resultAction.payload);
      } else if (connectWalletAndLoadData.rejected.match(resultAction)) {
        console.error('Failed to connect wallet and load data:', resultAction.error);
      }
    } catch (error) {
      console.error('Unexpected error during wallet connection:', error);
    }
  };

  const handleDisconnect = async () => {
    try {
      await dispatch(disconnectWalletAndClearQueue());
      console.log('Wallet disconnected and queue cleared');
    } catch (error) {
      console.error('Unexpected error during wallet disconnection:', error);
    }
  };

  // EFFECTS --------------------------------------

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


  // STRUCTURE -----------------------------------

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
                <span className="ui-button">Loading</span>
              ) : (
                <div
                  href="#"
                  onClick={connected ? handleDisconnect : handleConnect}
                  className={`ui-button ${connected ? 'disconnect' : 'connect'}`}
                >
                  {connected ? 'D/C' : 'Connect'}
                </div>
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
