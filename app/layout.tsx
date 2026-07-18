import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const description =
  "Siddharth Paul is a computer science and physics student at Rutgers building research tooling, AR systems, and full-stack software.";

export const metadata: Metadata = {
  // Origin only — the basePath (/my-portfolio on Pages) is prepended to the
  // file-convention OG image automatically; including it here would double it.
  metadataBase: new URL("https://sidp24.github.io/"),
  title: {
    default: "Siddharth Paul",
    template: "%s — Siddharth Paul",
  },
  description,
  openGraph: {
    type: "website",
    siteName: "Siddharth Paul",
    title: "Siddharth Paul",
    description,
  },
  twitter: {
    card: "summary_large_image",
    title: "Siddharth Paul",
    description,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="flex min-h-full flex-col">
        <Navbar />
        <main className="grow">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
