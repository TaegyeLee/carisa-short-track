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
  metadataBase: new URL("https://canada-short-track.vercel.app"),
  title: {
    default: "Canada Short Track | Speed Skating, Races & Training",
    template: "%s | Canada Short Track",
  },
  description:
    "Explore Canadian short track speed skating: national team stories, memorable races, training, equipment and Carisa Lee's skating journey.",
  applicationName: "Canada Short Track",
  openGraph: {
    type: "website",
    locale: "en_CA",
    siteName: "Canada Short Track",
    title: "Canada Short Track | Speed Skating, Races & Training",
    description: "Discover Canadian short track racing, athletes, training, equipment and Carisa Lee's journey on ice.",
    url: "/",
  },
  twitter: { card: "summary_large_image" },
  robots: { index: true, follow: true },
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
