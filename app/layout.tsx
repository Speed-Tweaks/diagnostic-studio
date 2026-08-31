import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://thediagnosticstudio.co.uk"),
  title: {
    default: "The Diagnostic Studio | Advanced Vehicle Diagnostics",
    template: "%s | The Diagnostic Studio",
  },
  description:
    "Advanced vehicle diagnostics, manufacturer-level programming, complex fault finding and vehicle security support for motorists and the motor trade.",
  applicationName: "The Diagnostic Studio",
  keywords: [
    "vehicle diagnostics",
    "advanced diagnostics",
    "fault finding",
    "vehicle programming",
    "module coding",
    "vehicle security",
    "automotive diagnostics",
    "motor trade diagnostics",
  ],
  authors: [{ name: "The Diagnostic Studio" }],
  creator: "The Diagnostic Studio",
  publisher: "The Diagnostic Studio",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "The Diagnostic Studio | Advanced Vehicle Diagnostics",
    description:
      "Advanced diagnostics, manufacturer-level programming and difficult fault finding for motorists and the motor trade.",
    url: "https://thediagnosticstudio.co.uk",
    siteName: "The Diagnostic Studio",
    locale: "en_GB",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "The Diagnostic Studio | Advanced Vehicle Diagnostics",
    description:
      "Advanced diagnostics, manufacturer-level programming and difficult fault finding for motorists and the motor trade.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en-GB"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}