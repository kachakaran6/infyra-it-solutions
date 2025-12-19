import type { Metadata } from "next";
import "./globals.css";
import Script from "next/script";

export const metadata: Metadata = {
  title: "Infyra IT Solutions",
  description:
    "Infyra provides enterprise-grade web development, UI/UX design, automation, and custom software solutions.",
  icons: "/icon1.png",
  // icons: {
  //   icon: "/logo1.png",
  //   apple: "/logo1.png",
  // },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
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
      <body>{children}</body>
    </html>
  );
}
