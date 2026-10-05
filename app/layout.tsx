import type { Metadata } from "next";
import { Barlow_Condensed, Source_Sans_3 } from "next/font/google";
import { SiteFooter } from "@/components/site-footer";
import "./globals.css";

const barlowCondensed = Barlow_Condensed({
  variable: "--font-barlow-condensed",
  subsets: ["latin"],
  weight: ["600", "700"],
});

const sourceSans = Source_Sans_3({
  variable: "--font-source-sans",
  subsets: ["latin"],
  weight: ["400", "500"],
});

export const metadata: Metadata = {
  title: "Carisa Lee | Short Track Speed Skating",
  description:
    "Follow Carisa Lee's short track speed skating journey through training, competition, and development toward Canada's national team.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${barlowCondensed.variable} ${sourceSans.variable} scroll-smooth antialiased`}
    >
      <body className="bg-[#070b14] font-sans text-white">
        {children}
        <SiteFooter />
      </body>
    </html>
  );
}
