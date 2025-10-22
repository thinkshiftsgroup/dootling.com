import type { Metadata } from "next";
import Favicon from "@/public/images/dootlinglogowBG.svg";
import "./globals.css";
import { Toaster } from "sonner";
import ReactQueryProvider from "@/providers/ReactQueryProvider";

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
          href="https://fonts.cdnfonts.com/css/euclid-circular-a"
          rel="stylesheet"
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
      <body className={`antialiased`}>
        <ReactQueryProvider>{children}</ReactQueryProvider>
        <Toaster />
      </body>
    </html>
  );
}
