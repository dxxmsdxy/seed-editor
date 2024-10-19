import { usePathname, useRouter } from "next/navigation";
import {
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/UI/DropdownMenu";

export const MenuMobileTrigger = () => {
  return (
    <DropdownMenuTrigger
      className="menu-button-2 z-nav-button"
      style={{ WebkitUserSelect: "text" }}
      aria-label="menu"
      role="button"
      tabIndex={0}
      aria-controls="z-nav-overlay-0"
      aria-haspopup="menu"
      aria-expanded="false"
    >
      <div className="z-icon-nav-menu" />
    </DropdownMenuTrigger>
  );
};

export const MenuMobileContent = ({ dropdownOpen }) => {
  const pathname = usePathname();
  const router = useRouter();

  return (
    <div
      style={
        dropdownOpen
          ? {
              display: "block",
              // height: 836,
              height: "100vh",
            }
          : {}
      }
      className="z-nav-overlay"
      data-wf-ignore
      id="z-nav-overlay-0"
    >
      {dropdownOpen && (
        <DropdownMenuContent
          asChild
          role="navigation"
          className={`nav-menu z-nav-menu md:hidden`}
          style={{
            transform: "translateY(0px) translateX(0px)",
            transition: "transform 400ms ease 0s",
            left: 0,
          }}
          data-nav-menu-open
          portal={document.getElementById("z-nav-overlay-0")}
        >
          <div
            data-hover="false"
            data-delay={0}
            className="nav-dropdown-item z-dropdown z--nav-dropdown-open"
          >
            <nav
              className="dropdown-list z-dropdown-list z--nav-dropdown-list-open"
              id="z-dropdown-list-0"
              aria-labelledby="z-dropdown-toggle-0"
            >
              <DropdownMenuItem
                onSelect={(e) => {
                  router.push("/");
                  document.querySelector('.theme-bkg').style.background = "#f5f5f5";
                }}
                className={`dropdown-link z-dropdown-link ${
                  pathname === "/" ? "z--current" : ""
                }`}
              >
                Inscribe
              </DropdownMenuItem>
              <DropdownMenuItem
                onSelect={(e) => {
                  router.push("/collection");
                  document.querySelector('.theme-bkg').style.background = "#f5f5f5";
                }}
                className={`dropdown-link z-dropdown-link ${
                  pathname === "/collection" ? "z--current" : ""
                }`}
              >
                Collection
              </DropdownMenuItem>
              <DropdownMenuItem
                onSelect={(e) => {
                  router.push("/info");
                  document.querySelector('.theme-bkg').style.background = "#f5f5f5";
                }}
                className={`dropdown-link z-dropdown-link ${
                  pathname === "/info" ? "z--current" : ""
                }`}
              >
                Info
              </DropdownMenuItem>
              <DropdownMenuItem
                onSelect={(e) => {
                  router.push("/garden");
                  document.querySelector('.theme-bkg').style.background = "#f5f5f5";
                }}
                className={`dropdown-link z-dropdown-link ${
                  pathname === "/garden" ? "z--current" : ""
                }`}
              >
                Garden Map
              </DropdownMenuItem>
              <div className="nav-social-links">
                <a
                  href="https://twitter.com/dxxmsdxy"
                  className="dropdown-link social z-dropdown-link"
                  tabIndex={0}
                >
                  X
                </a>
                <a
                  href="https://discord.gg/UMD27gr5WB"
                  className="dropdown-link social z-dropdown-link"
                  tabIndex={0}
                >
                  Discord
                </a>
              </div>
            </nav>
          </div>
        </DropdownMenuContent>
      )}
    </div>
  );
};
