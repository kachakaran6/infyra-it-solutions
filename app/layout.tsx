import type { Metadata } from "next";
import { Outfit, Inter } from "next/font/google";
import "./globals.css";
import Script from "next/script";

const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-outfit",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "Infyra IT Solutions | Enterprise Digital Transformation",
  description:
    "Infyra provides enterprise-grade web development, UI/UX design, automation, and custom software solutions to scale your business.",
  icons: "/icon1.png",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${outfit.variable} ${inter.variable}`}>
      <head>
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-YLJEH14SGM"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-YLJEH14SGM');
          `}
        </Script>
      </head>
      <body className="font-inter antialiased">{children}</body>
    </html>
  );
}
