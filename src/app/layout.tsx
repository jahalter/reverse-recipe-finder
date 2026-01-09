import "~/styles/globals.css";

import { type Metadata } from "next";
import { Geist } from "next/font/google";

export const metadata: Metadata = {
  title: "Reverse Recipe Finder",
  description: "Save your unused groceries from the trash!",
  icons: [{ rel: "icon", url: "/favicon.ico" }],
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

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${geist.variable} h-full`}>
      <body className="h-full bg-linear-to-b from-[#27cf94] to-[#ffffff] text-white">
        <NavBar />
        {children}
      </body>
    </html>
  );
}
