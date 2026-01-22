import "~/styles/globals.css";

import { type Metadata } from "next";
import { Geist } from "next/font/google";
import type { Viewport } from "next";

export const metadata: Metadata = {
  title: "Reverse Recipe Finder",
  description: "Save your unused groceries from the trash!",
  icons: [{ rel: "icon", url: "/favicon.svg" }],
};

export const viewport: Viewport = {
  themeColor: "black",
};

const geist = Geist({
  subsets: ["latin"],
  variable: "--font-geist-sans",
});

function NavBar() {
  return (
    <div>
      <h1 className="p-2 text-3xl font-medium">RRF</h1>
    </div>
  );
}

export default async function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${geist.variable} min-h-dvh text-base`}>
      <body className="min-h-dvh bg-linear-to-b from-[#27cf94] to-[#e6f8ef] text-white">
        <div className="flex flex-col justify-stretch">
          <NavBar />
          {children}
        </div>
      </body>
    </html>
  );
}
