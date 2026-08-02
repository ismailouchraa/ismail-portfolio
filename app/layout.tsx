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
  metadataBase: new URL("https://your-domain.com"),

  title: {
    default: "Ismail Ouchraa | Software Engineer",
    template: "%s | Ismail Ouchraa",
  },

  description:
    "Software Engineer passionate about Full Stack Development, Artificial Intelligence, DevOps and building modern, scalable web applications.",

  keywords: [
    "Ismail Ouchraa",
    "Software Engineer",
    "Full Stack Developer",
    "Artificial Intelligence",
    "AI",
    "Next.js",
    "React",
    "Django",
    "Python",
    "MongoDB",
    "Portfolio",
    "Web Developer",
    "DevOps",
  ],

  authors: [
    {
      name: "Ismail Ouchraa",
    },
  ],

  creator: "Ismail Ouchraa",

  openGraph: {
    title: "Ismail Ouchraa | Software Engineer",
    description:
      "Portfolio showcasing software engineering, AI, Full Stack Development and modern web applications.",
    url: "https://ismail-portfolio.vercel.app",
    siteName: "Ismail Ouchraa Portfolio",
    locale: "en_US",
    type: "website",

    images: [
      {
        url: "/images/og-image.png",
        width: 1200,
        height: 630,
        alt: "Ismail Ouchraa Portfolio",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Ismail Ouchraa | Software Engineer",
    description:
      "Portfolio showcasing software engineering, AI, Full Stack Development and modern web applications.",

    images: ["/images/og-image.png"],
  },

  robots: {
    index: true,
    follow: true,
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
      <body className="min-h-full flex flex-col">
        {children}
      </body>
    </html>
  );
}