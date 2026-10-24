import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import ClientLayout from "@/components/ClientLayout";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    template: "%s | Herbbo",
    default: "Herbbo - Natural Health & Wellness Supplements",
  },
  description:
    "Herbbo - Your trusted source for DRAP-approved herbal supplements, natural health products, and wellness solutions in Pakistan. Laboratory-certified quality you can trust.",
  keywords: [
    "herbal supplements",
    "natural health",
    "wellness products",
    "DRAP approved",
    "Pakistan",
    "Herbbo",
  ],
  authors: [{ name: "Herbbo" }],
  openGraph: {
    title: "Herbbo - Natural Health & Wellness Supplements",
    description:
      "Your trusted source for DRAP-approved herbal supplements and wellness products in Pakistan.",
    type: "website",
    locale: "en_PK",
  },
  twitter: {
    card: "summary_large_image",
    title: "Herbbo - Natural Health & Wellness Supplements",
    description:
      "Your trusted source for DRAP-approved herbal supplements and wellness products in Pakistan.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-accent">
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="apple-touch-icon" href="/favicon.ico" />
        <ClientLayout>{children}</ClientLayout>
      </body>
    </html>
  );
}
