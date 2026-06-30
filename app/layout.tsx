import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "BRIEF",
  description: "The daily word game for brand thinkers.",
  icons: {
    icon: "/BRIEF/favicon.svg",
    shortcut: "/BRIEF/favicon.svg",
  },
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
