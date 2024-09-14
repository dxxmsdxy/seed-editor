import { usePathname, useRouter } from "next/navigation";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/UI/dropdownMenu";

export const MenuDesktop = ({ dropdownOpen, setDropdownOpen }) => {
  const pathname = usePathname();
  const router = useRouter();
  // const isActive = (path) => pathname === path;

  return (
    <nav role="navigation" className="nav-menu z-nav-menu">
      <div
      className="nav-logo-wrapper"
    >
      <a
        href="/"
        className="seed-emoji-logo w-inline-block"
      >
        <div>🌱</div>
      </a>
    </div>
      <div
        data-hover="false"
        data-delay={0}
        className="nav-dropdown-item z-dropdown"
      >
        <DropdownMenuTrigger
          className="bg-transparent"
          style={{
            // fontSize: 20,
          }}
        >
          <div
            className={`dropdown-toggle z-dropdown-toggle ${
              dropdownOpen ? "z--open" : ""
            } uppercase bg-transparent`}
            id="z-dropdown-toggle-0"
            aria-controls="z-dropdown-list-0"
            aria-haspopup="menu"
            aria-expanded="false"
            role="button"
            tabIndex={0}
            // onClick={() => setDropdownOpen(!dropdownOpen)}
          >
            <div className="icon-2 z-icon-dropdown-toggle" aria-hidden="true" />
            <div>Menu</div>
          </div>
        </DropdownMenuTrigger>
        <DropdownMenuContent
          className={`dropdown-list z-dropdown-list z-mobile-menu  ${
            dropdownOpen ? "z--open" : ""
          }`}
          id="z-dropdown-list-0"
          aria-labelledby="z-dropdown-toggle-0"
          align="start"
        >
          <DropdownMenuItem
            onSelect={(e) => {
              router.push("/info");
              document.querySelector('.theme-bkg').style.background = "#f5f5f5";
            }}
            className={`uppercase font-bold rounded-none ${
              pathname === "/info" ? "z--current" : ""
            }`}
          >
            Overview
          </DropdownMenuItem>
          <DropdownMenuItem
            onSelect={(e) => {
              router.push("/");
              document.querySelector('.theme-bkg').style.background = "#f5f5f5";
            }}
            className={`uppercase font-bold ${
              pathname === "/" ? "z--current" : ""
            }`}
          >
            Seed Editor
          </DropdownMenuItem>
          <DropdownMenuItem
            onSelect={(e) => {
              router.push("/collection");
              document.querySelector('.theme-bkg').style.background = "#f5f5f5";
            }}
            className={`uppercase font-bold rounded-none ${
              pathname === "/collection" ? "z--current" : ""
            }`}
          >
            Collection
          </DropdownMenuItem>
          <DropdownMenuItem
            onSelect={(e) => {
              router.push("/garden");
              document.querySelector('.theme-bkg').style.background = "#f5f5f5";
            }}
            className={`uppercase font-bold rounded-none ${
              pathname === "/garden" ? "z--current" : ""
            }`}
          >
            Garden Map
          </DropdownMenuItem>
          <a
              href="https://docs.seed.gallery/"
              className="dropdown-link z-dropdown-link"
              tabIndex={0}
            >
              Documentation
            </a>
          <div className="nav-social-links">
            <a
              href="https://twitter.com/dxxmsdxy"
              className="dropdown-link social z-dropdown-link"
              tabIndex={0}
            >
              Twitter
            </a>
            <a
              href="https://discord.gg/UMD27gr5WB"
              className="dropdown-link social z-dropdown-link"
              tabIndex={0}
            >
              Discord
            </a>
          </div>
          {/*
           */}
        </DropdownMenuContent>
      </div>
    </nav>
  );
};
