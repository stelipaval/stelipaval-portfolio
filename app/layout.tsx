import type { Metadata } from "next";
import { Geist, Geist_Mono, Bonheur_Royale } from "next/font/google";

import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const bonheurRoyale = Bonheur_Royale({
  subsets: ['latin'],
  weight: '400',
  variable: '--font-bonheur-royale',
})

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: 'Stelica Paval | Senior Software Engineer',
    template: '%s | Stelica Paval'
  },
  description: 'Senior Software Engineer specializing in AI/ML engineering, full-stack development, and cloud solutions. 7+ years of experience building scalable applications.',
  keywords: [
    'Software Engineer',
    'Full Stack Developer',
    'AI/ML Engineer',
    'React',
    'TypeScript',
    'Node.js',
    'Python',
    'PyTorch',
    'AWS',
    'Cloud Architecture'
  ],
  authors: [{ name: 'Stelica Paval' }],
  creator: 'Stelica Paval',
  publisher: 'Stelica Paval',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://stelipaval.com'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://stelipaval.com',
    title: 'Stelica Paval | Senior Software Engineer',
    description: 'Senior Software Engineer specializing in AI/ML engineering, full-stack development, and cloud solutions.',
    siteName: 'Stelica Paval',
    images: [
      {
        url: '/images/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Stelica Paval - Senior Software Engineer',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Stelica Paval | Senior Software Engineer',
    description: 'Senior Software Engineer specializing in AI/ML engineering, full-stack development, and cloud solutions.',
    creator: '@stelicapaval',
    images: ['/images/og-image.png'],
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
  category: 'technology',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link
          rel="icon"
          href="/images/profilepic.png"
          type="image/png"
          sizes="32x32"
        />
        <link
          rel="icon"
          href="/images/profilepic.png"
          type="image/png"
          sizes="16x16"
        />
        <link
          rel="apple-touch-icon"
          href="/images/profilepic.png"
          sizes="180x180"
        />
        <link
          rel="mask-icon"
          href="/images/profilepic.png"
          color="#000000"
        />
        <meta name="theme-color" content="#000000" />
        <meta name="msapplication-TileColor" content="#000000" />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${bonheurRoyale.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
