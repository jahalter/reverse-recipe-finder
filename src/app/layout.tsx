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

function Footer() {
  return <footer className="h-[20.4rem]"></footer>;
}

export default async function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${geist.variable} h-dvh text-base`}>
      <body className="h-dvh bg-linear-to-b from-[#27cf94] to-[#ffffff] text-white">
        <div className="flex flex-col justify-stretch">
          <NavBar />
          {children}
          <Footer />
        </div>
      </body>
    </html>
  );
}
