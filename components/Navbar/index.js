"use client";
import { useState, useEffect } from "react";
import Link from 'next/link';

import { MenuDesktop } from "./MenuDesktop";
import { MenuMobileContent, MenuMobileTrigger } from "./MenuMobile";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

export const Navbar = () => {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(null);

  useEffect(() => {
    if (typeof window !== "undefined") {
      setIsMobile(window.innerWidth < 992);
    }
  }, []);

  useEffect(() => {
    // Define the resize handler
    const handleResize = () => {
      setIsMobile(window.innerWidth < 992);
    };

    // Set up the event listener
    window.addEventListener("resize", handleResize);

    // Cleanup function to remove the event listener
    return () => window.removeEventListener("resize", handleResize);
  }, []);

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
            <div className="navbar-disconnect disabled">
              <Link href="/" className="ui-button disconnect">D/C</Link>
            </div>
            <div className="navbar-connect">
              <Link href="/" className="ui-button connect">Connect</Link>
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
    </div>
  );
};
