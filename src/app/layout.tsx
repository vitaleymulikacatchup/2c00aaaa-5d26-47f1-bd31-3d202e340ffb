import type { Metadata } from "next";
import { Inter_Tight, Poppins } from "next/font/google";
import { SiteThemeProvider } from '@/components/sections/ThemeProvider';
import "./globals.css";

const interTight = Inter_Tight({
  variable: "--font-inter-tight",
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"]
});

export const metadata: Metadata = {
  title: "MemeNova",
  description: "Create a playful, single-page landing that explains MemeNova, how to buy, and the tokenomics, with a fun community vibe.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${interTight.variable} ${poppins.variable} antialiased bg-background text-foreground`}>{children}</body>
    </html>
  );
}
