import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
});

export const metadata = {
  title: {
    default: "Asad Ali - Full Stack Developer Portfolio",
    template: "%s | Asad Ali - Portfolio"
  },
  description: "Full Stack Developer specializing in React, Next.js, and modern web technologies. View my projects, skills, and experience.",
  keywords: ["Full Stack Developer", "React", "Next.js", "JavaScript", "Portfolio", "Web Developer"],
  authors: [{ name: "Asad Ali" }],
  creator: "Asad Ali",
  publisher: "Asad Ali",
  metadataBase: new URL('https://terminal-portfolio-phi-ten.vercel.app/'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://terminal-portfolio-phi-ten.vercel.app/',
    title: 'Asad Ali - Full Stack Developer Portfolio',
    description: 'Full Stack Developer specializing in React, Next.js, and modern web technologies. View my projects, skills, and experience.',
    siteName: 'Asad Ali Portfolio',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Asad Ali - Full Stack Developer Portfolio',
    description: 'Full Stack Developer specializing in React, Next.js, and modern web technologies.',
    creator: '@asadali-07',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'your-google-verification-code',
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link rel="manifest" href="/site.webmanifest" />
        <meta name="theme-color" content="#000000" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-background text-foreground`}
      >
        <div className="flex min-h-screen flex-col">
          {children}
        </div>
      </body>
    </html>
  );
}