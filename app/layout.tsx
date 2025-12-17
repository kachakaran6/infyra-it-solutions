import type { Metadata } from "next";
import "./globals.css";

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
      <body>{children}</body>
    </html>
  );
}
