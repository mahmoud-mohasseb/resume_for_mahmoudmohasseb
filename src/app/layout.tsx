import type { Metadata } from "next";
import { Inter, Outfit, Cairo, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { LanguageProvider } from "@/context/LanguageContext";
import { AudioReaderProvider } from "@/context/AudioReaderContext";
import ResumeAudioNarrator from "@/components/ResumeAudioNarrator";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-outfit",
  display: "swap",
});

const cairo = Cairo({
  subsets: ["arabic", "latin"],
  variable: "--font-cairo",
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://mahmoud-ahmed.netlify.app"),
  title: "Mahmoud Mohasseb | Technical Support Specialist & AI Vibe Coding Pioneer",
  description:
    "Portfolio of Mahmoud Mohasseb — Technical Support Specialist, Cloud & Application Operations, Incident Resolution, Lean Digital Transformation, and Next-Gen AI Vibe Coding (Claude 3.7, Cursor, Antigravity).",
  keywords: [
    "Mahmoud Mohasseb",
    "Technical Support Specialist",
    "Application Support",
    "Incident Resolution",
    "Lean Digital Transformation",
    "Vibe Coding",
    "Claude 3.7",
    "Cursor AI",
    "Google Antigravity",
    "Next.js Developer",
    "Microsoft EMEA Operations",
    "Genpact",
    "Bucharest Romania",
  ],
  authors: [{ name: "Mahmoud Mohasseb" }],
  openGraph: {
    title: "Mahmoud Mohasseb | Technical Support Specialist & AI Pioneer",
    description:
      "Enterprise support operations, full-stack debugging, and AI-assisted vibe coding workflows.",
    url: "https://mahmoud-ahmed.netlify.app",
    siteName: "Mahmoud Mohasseb Portfolio",
    images: [
      {
        url: "/mahmoud-profile.png",
        width: 800,
        height: 800,
        alt: "Mahmoud Mohasseb",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  icons: {
    icon: [
      { url: "/favicon.svg", type: "image/svg+xml" },
      { url: "/icon", sizes: "32x32", type: "image/png" },
    ],
    shortcut: "/favicon.svg",
    apple: [
      { url: "/apple-icon", sizes: "180x180", type: "image/png" },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Mahmoud Mohasseb | Tech Support & AI Vibe Coding",
    description: "Enterprise support, incident resolution, and next-gen AI engineering.",
    images: ["/mahmoud-profile.png"],
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
      className={`dark scroll-smooth ${inter.variable} ${outfit.variable} ${cairo.variable} ${jetbrainsMono.variable}`}
    >
      <body className="bg-[#06090f] text-slate-100 antialiased min-h-screen">
        <LanguageProvider>
          <AudioReaderProvider>
            {children}
            <ResumeAudioNarrator />
          </AudioReaderProvider>
        </LanguageProvider>
      </body>
    </html>
  );
}

