import type { Metadata } from "next";
import { Dancing_Script } from "next/font/google";
import "./globals.css";

const dancingScript = Dancing_Script({
  subsets: ["latin"],
  variable: "--font-dancing-script",
  display: "swap",
});

export const metadata: Metadata = {
  title: "TopShelf Rewards - Turn Sales Into Rewards | VIP Beverage Software",
  description: "Transform your beverage representatives into treasure hunters! Reward your team with points based on sales performance. Seamlessly integrated with VIP Beverage Software.",
  keywords: ["topshelf rewards", "rep rewards", "beverage software", "VIP beverage", "sales rewards", "representative rewards", "employee rewards"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={dancingScript.variable}>
      <body>{children}</body>
    </html>
  );
}

