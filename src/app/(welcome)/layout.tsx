import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./../globals.css";
import Wrapper from "../components/shared/Wrapper";
import Footer from "../components/shared/Footer";
import AsideMenu from "../components/shared/AsideMenu";
import HeaderNavbar from "../components/shared/HeaderNavbar";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: process.env.BRAND,
  description: process.env.DESC,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <div className="w-full min-h-screen flex flex-col">
          <HeaderNavbar />
          <div className="flex h-screen flex-1 mt-16">
            <AsideMenu />
            <Wrapper fullWidth={true}>{children}</Wrapper>
          </div>
        </div>
      </body>
    </html>
  );
}
