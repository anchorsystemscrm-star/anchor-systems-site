import type { Metadata } from "next";

import { Footer } from "@/components/footer";
import { Header } from "@/components/header";
import { siteConfig } from "@/data/site";
import { absoluteUrl, getBaseUrl } from "@/lib/seo";

import "./globals.css";

export const metadata: Metadata = {
  metadataBase: getBaseUrl(),
  title: {
    default:
      "Anchor Systems | AI for Service Businesses That Want More Booked Jobs",
    template: "%s | Anchor Systems"
  },
  description: siteConfig.description,
  openGraph: {
    title: "Anchor Systems",
    description: siteConfig.description,
    siteName: siteConfig.name,
    url: absoluteUrl("/"),
    type: "website"
  },
  twitter: {
    card: "summary_large_image",
    title: "Anchor Systems",
    description: siteConfig.description
  }
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="min-h-screen font-sans">
        <div className="relative flex min-h-screen flex-col">
          <Header />
          <main className="flex-1">{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
