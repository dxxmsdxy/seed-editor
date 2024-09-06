import type { Metadata } from "next";
import Script from "next/script";
import { SeedProvider, ArtworkProvider, WalletProvider } from "@/context";
import { Navbar } from "@/components/Navbar";

import { Inconsolata } from "next/font/google";
import "./globals.css";

const inconsolata = Inconsolata({
  weight: ["400", "600", "700"],
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "SEEDS",
  description: "Generative Art",
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
    <html lang="en">
      <head>
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
      <WalletProvider>
        <SeedProvider>
          <ArtworkProvider>
            <body className={`body ${inconsolata.className} `}>
              <Navbar />
              {children}
            </body>
          </ArtworkProvider>
        </SeedProvider>
      </WalletProvider>
    </html>
  );
}
