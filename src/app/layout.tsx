import type { Metadata, Viewport } from "next";
import type { ReactNode } from "react";
import "./globals.css";
import { siteConfig } from "@/lib/site";

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: "Beauty By Maya | טיפולי פנים פרימיום",
    template: "%s | Beauty By Maya",
  },
  description: siteConfig.description,
  applicationName: siteConfig.name,
  authors: [{ name: "Beauty By Maya" }],
  creator: "Beauty By Maya",
  openGraph: {
    title: "Beauty By Maya | טיפולי פנים פרימיום",
    description: siteConfig.description,
    url: siteConfig.url,
    siteName: siteConfig.name,
    locale: "he_IL",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Beauty By Maya | טיפולי פנים פרימיום",
    description: siteConfig.description,
  },
  alternates: {
    canonical: siteConfig.url,
  },
};

export const viewport: Viewport = {
  themeColor: "#fff7f2",
  colorScheme: "light",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <html lang="he" dir="rtl">
      <body>{children}</body>
    </html>
  );
}
