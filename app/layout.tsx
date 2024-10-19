import { ReduxProvider } from '../context/ReduxProvider';
import type { Metadata } from "next";
import Script from "next/script";
import { SeedProvider, ArtworkProvider } from "@/context";
import { ViewTransitions } from 'next-view-transitions'
import { Navbar } from "@/components/Navbar";

import { Inconsolata } from "next/font/google";
import "./globals.css";



//================================================//

const inconsolata = Inconsolata({
  weight: ["400", "600", "700"],
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "SEEDS",
  description: "9,999 code-based artworks inscribed forever on the Bitcoin blockchain.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  // BANNER:
  // useEffect(() => {
  //   // 1. get mine seeds (count) if you get the wallet
  //   // 2. if some seeds are unconfirmed - show banner
  // }, []);

  // <script
  //   src="/scripts/combined_dependencies.js"
  //   strategy="beforeInteractive"
  // ></script>
  // <script
  //   src="/scripts/mint_api.min.js"
  //   strategy="beforeInteractive"
  // ></script>
  return (
    <ViewTransitions>
      <html lang="en">
        <head>
          <link rel="mask-icon" href="/safari-pinned-tab.svg" color="var(--theme-color)"/>
          <meta name="apple-mobile-web-app-capable" content="yes"/>
          <meta name="mobile-web-app-capable" content="yes"/>
          <meta name="apple-mobile-web-app-status-bar-style" content="var(--theme-color)"/>
          <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
          <meta name="msapplication-TileColor" content="var(--theme-color)"/>
          <meta name="theme-color" content="var(--theme-color)"/>
          <link rel="preconnect" href="https://fonts.googleapis.com" />

          <Script src="https://seeds.mintapi.bestinslot.xyz/static/combined_dependencies.js"></Script>
          <Script src="https://seeds.mintapi.bestinslot.xyz/static/mint_api.min.js"></Script>
          <link
            rel="preconnect"
            href="https://fonts.gstatic.com"
            // crossOrigin="true"
          />
          <link
            href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;600;700;800&display=swap"
            rel="stylesheet"
          />
          <link
            rel="stylesheet"
            href="https://seeds.mintapi.bestinslot.xyz/static/connect_wallet.css"
          />
          {/*
          */}
        </head>
        <ReduxProvider>
          <SeedProvider>
            <ArtworkProvider>
              <body className={`body ${inconsolata.className}`}>
                <div className="theme-bkg"></div>
                <Navbar />
                {children}
              </body>
            </ArtworkProvider>
          </SeedProvider>
        </ReduxProvider>
      </html>
    </ViewTransitions>
  );
}
