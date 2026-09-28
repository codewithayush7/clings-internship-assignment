import type { Metadata, Viewport } from "next";
import { Manrope } from "next/font/google";
import "./globals.css";

const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-manrope",
  weight: ["300", "400", "500", "600", "700", "800"],
  display: "swap",
});

export const viewport: Viewport = {
  themeColor: "#0A0A0B",
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

export const metadata: Metadata = {
  title: "Cling InfoTech | Enterprise Software, Web & Mobile Product Engineering",
  description:
    "Leading IT solutions provider delivering scalable web platforms, native mobile apps, enterprise ERPs, and computer vision AI. 350+ global clients, 390+ completed projects, 32M+ lines of code.",
  keywords: [
    "Cling InfoTech",
    "Cling Multi Solutions",
    "Enterprise Software Development",
    "Web Application Development",
    "Mobile App Development",
    "ERP Development",
    "Artificial Intelligence",
    "Computer Vision",
    "Next.js Development",
    "IT Solutions",
  ],
  authors: [{ name: "Cling InfoTech Works Private Limited" }],
  creator: "Cling InfoTech",
  publisher: "Cling InfoTech",
  metadataBase: new URL("https://clinginfotech.com"),
  openGraph: {
    title: "Cling InfoTech | Making Your Ideas Happen!",
    description:
      "Modern digital product engineering across web, mobile, AI/ML, and enterprise ERP solutions. 350+ clients and 390+ delivered projects worldwide.",
    url: "https://clinginfotech.com",
    siteName: "Cling InfoTech",
    images: [
      {
        url: "/images/logo.png",
        width: 1200,
        height: 630,
        alt: "Cling InfoTech - Digital Product Engineering",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Cling InfoTech | Enterprise Software & Product Engineering",
    description:
      "We build digital products that move businesses forward. Web, Mobile, AI/ML, and Enterprise ERPs.",
    images: ["/images/logo.png"],
  },
  icons: {
    icon: "/images/logo.png",
    apple: "/images/logo.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${manrope.variable} scroll-smooth dark`}>
      <body className="min-h-screen bg-[#0A0A0B] text-white font-sans selection:bg-[#EF1B23] selection:text-white antialiased">
        {children}
      </body>
    </html>
  );
}
