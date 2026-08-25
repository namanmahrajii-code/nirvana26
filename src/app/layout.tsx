import type { Metadata } from 'next';
import { Space_Grotesk, JetBrains_Mono, Syne, Cinzel } from 'next/font/google';
import './globals.css';

const spaceGrotesk = Space_Grotesk({
  variable: '--font-sans',
  subsets: ['latin'],
  display: 'swap',
  weight: ['300', '400', '500', '600', '700'],
});

const jetbrainsMono = JetBrains_Mono({
  variable: '--font-mono',
  subsets: ['latin'],
  display: 'swap',
  weight: ['400', '500', '700'],
});

const syne = Syne({
  variable: '--font-syne',
  subsets: ['latin'],
  display: 'swap',
  weight: ['700', '800'],
});

const cinzel = Cinzel({
  variable: '--font-cinzel',
  subsets: ['latin'],
  display: 'swap',
  weight: ['600', '700', '900'],
});

export const metadata: Metadata = {
  title: "NIRVAN '26 // WHERE IDEAS BECOME INNOVATION // GEHU CAMPUS",
  description: "Annual Flagship 3D Tech Fest at Graphic Era Hill University (GEHU). 36-Hour Hackathon, Offensive CTF, E-Sports Arena, Tech Keynotes, and Augmented Treasure Hunt.",
  keywords: ["NIRVAN 26", "GEHU Fest", "Hackathon", "CTF", "E-Sports", "Tech Festival", "Graphic Era"],
  openGraph: {
    title: "NIRVAN '26 // WHERE IDEAS BECOME INNOVATION",
    description: "Experience the ultimate 3D engineering gauntlet at GEHU Campus.",
    siteName: "NIRVAN 2026",
    type: "website",
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${spaceGrotesk.variable} ${jetbrainsMono.variable} ${syne.variable} ${cinzel.variable} dark`}
    >
      <body className="min-h-screen bg-[#060608] text-[#F4F4F6] selection:bg-[#E50914] selection:text-white font-sans antialiased overflow-x-hidden">
        <div className="noise-bg" aria-hidden="true" />
        {children}
      </body>
    </html>
  );
}
