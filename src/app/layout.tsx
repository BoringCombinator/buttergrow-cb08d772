import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "ButterGrow",
  description:
    "ButterGrow helps Chinese AI startups find the right Reddit and X conversations, reply in natural English, and track what converts.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
