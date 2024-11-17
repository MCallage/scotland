import type { Metadata } from "next";
import { Playfair_Display_SC, Roboto_Mono } from "next/font/google";
import "./globals.css";

const title = Playfair_Display_SC({
  variable: "--font-title",
  weight: "400",
});

const body = Roboto_Mono({
  variable: "--font-body",
  weight: "400",
});

export const metadata: Metadata = {
  title: "Places to Discovery",
  description: "Model site developed by MC Creative.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${title.variable} ${body.variable} antialiased bg-gray-50`}
      >
        {children}
      </body>
    </html>
  );
}