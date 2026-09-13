import type { Metadata, Viewport } from "next";
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

export const viewport: Viewport = {
  themeColor: "#08090b",
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  viewportFit: "cover",
};

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

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Person",
      "@id": "https://mahmoud-ahmed.netlify.app/#person",
      "name": "Mahmoud Mohasseb",
      "jobTitle": "Technical Support Specialist & AI Vibe Coding Pioneer",
      "description":
        "Technical Support Specialist with 5+ years of enterprise IT support operations, cloud application diagnostics, Lean digital transformation, and next-generation AI Vibe Coding workflows.",
      "url": "https://mahmoud-ahmed.netlify.app",
      "image": "https://mahmoud-ahmed.netlify.app/mahmoud-profile.png",
      "address": {
        "@type": "PostalAddress",
        "addressLocality": "Bucharest",
        "addressCountry": "RO"
      },
      "telephone": "+40752331545",
      "email": "Ghareb4@gmail.com",
      "sameAs": [
        "https://linkedin.com/in/mahmoud-m-5b6824b6",
        "https://github.com/mahmoud-mohasseb"
      ],
      "knowsAbout": [
        "Technical Support Tier 1/2/3",
        "Root Cause Analysis (5-Why RCA)",
        "Incident Lifecycle Management",
        "Lean Digital Transformation",
        "Claude 3.7 Sonnet Extended Thinking",
        "Cursor AI Composer",
        "Google Antigravity Agentic IDE",
        "Next.js 15",
        "React.js",
        "TypeScript",
        "Node.js",
        "Google Apps Script Automation",
        "RESTful APIs",
        "Microsoft EMEA Cloud Operations"
      ],
      "hasCredential": [
        {
          "@type": "EducationalOccupationalCredential",
          "name": "Lean Certification (Digital Transformation)",
          "credentialCategory": "Certificate",
          "recognizedBy": {
            "@type": "Organization",
            "name": "Genpact"
          }
        },
        {
          "@type": "EducationalOccupationalCredential",
          "name": "AI Fluency: Framework & Foundations",
          "credentialCategory": "Certificate",
          "recognizedBy": {
            "@type": "Organization",
            "name": "Anthropic"
          }
        }
      ]
    },
    {
      "@type": "WebSite",
      "@id": "https://mahmoud-ahmed.netlify.app/#website",
      "url": "https://mahmoud-ahmed.netlify.app",
      "name": "Mahmoud Mohasseb Portfolio",
      "publisher": {
        "@id": "https://mahmoud-ahmed.netlify.app/#person"
      }
    }
  ]
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
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
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


