import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "HACKER GROUP | Terminal Frontend",
  description: "A retro terminal frontend for an ethical security research collective."
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
