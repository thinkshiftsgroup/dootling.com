import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Favicon from "@/public/images/dootlinglogowBG.svg";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Dootling - Connect with Confidence",
  description: "Connect and collaborate with confidence on Dootling",
  icons: [{ rel: "icon", url: Favicon.src }],
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <head>
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200"
        />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@200;300;400;500;600;700;800&display=swap"
        />
        <link rel="stylesheet" href="/css/socialv.css?v=5.2.2" />
        <link rel="stylesheet" href="/css/custom.css?v=5.2.2" />
        <link rel="stylesheet" href="/css/customizer.css?v=5.2.2" />
        <link rel="stylesheet" href="/css/rtl.css?v=5.2.2" />
        <link
          rel="stylesheet"
          href="/vendor/phosphor-icons/Fonts/bold/style.css"
        />
        <link
          rel="stylesheet"
          href="/vendor/phosphor-icons/Fonts/duotone/style.css"
        />
        <link
          rel="stylesheet"
          href="/vendor/phosphor-icons/Fonts/fill/style.css"
        />
        <link
          rel="stylesheet"
          href="/vendor/phosphor-icons/Fonts/light/style.css"
        />
        <link
          rel="stylesheet"
          href="/vendor/phosphor-icons/Fonts/regular/style.css"
        />
        <link
          rel="stylesheet"
          href="/vendor/phosphor-icons/Fonts/thin/style.css"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
