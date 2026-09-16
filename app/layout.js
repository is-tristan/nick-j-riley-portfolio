// Fonts
import localFont from "next/font/local";
const satoshi = localFont({
  src: [
    {
      path: "../public/fonts/satoshi/Satoshi-Light.woff2",
      weight: "300",
      style: "normal",
    },
    {
      path: "../public/fonts/satoshi/Satoshi-Regular.woff2",
      weight: "400",
      style: "normal",
    },
    {
      path: "../public/fonts/satoshi/Satoshi-Black.woff2",
      weight: "900",
      style: "normal",
    },
  ],
  variable: "--font-satoshi",
  display: "swap",
});

// Styles
import "@/styles/main.scss";

// Site
import {
  siteDescription,
  siteKeywords,
  siteName,
  siteOgImage,
  siteTitle,
  siteUrl,
} from "@/utils/site";
import {
  personJsonLd,
  professionalServiceJsonLd,
  websiteJsonLd,
} from "@/utils/structured-data";

// Components
import Header from "@/components/layouts/header/header";
import Footer from "@/components/layouts/footer/footer";
import SmoothScroll from "@/components/handlers/smooth-scroll";
import { JsonLd } from "@/components/seo/json-ld";

// Metadata
export const metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: siteTitle,
    template: `%s | ${siteName}`,
  },
  description: siteDescription,
  keywords: siteKeywords,
  authors: [{ name: siteName, url: siteUrl }],
  creator: siteName,
  publisher: siteName,
  category: "Aerial cinematography",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "en_ZA",
    url: siteUrl,
    siteName: siteName,
    title: siteTitle,
    description: siteDescription,
    images: [
      {
        url: siteOgImage,
        alt: "Aerial cinematography reel featuring Nick Riley drone work",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: siteTitle,
    description: siteDescription,
    images: [siteOgImage],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  other: {
    "ai-content": "portfolio of Nick Riley, South African drone pilot and aerial cinematographer",
  },
};

export default function RootLayout({ children }) {

  return (

    <html lang="en-ZA" className={satoshi.variable} data-scroll-behavior="smooth">

      <body className={satoshi.className}>

        <JsonLd data={personJsonLd} />

        <JsonLd data={websiteJsonLd} />

        <JsonLd data={professionalServiceJsonLd} />

        <div id="app" className="app">

            <SmoothScroll />

            <Header />

            <main id="main" className="main" aria-label="Main content">

              {children}

            </main>

            <Footer />

          </div>

      </body>

    </html>

  );
}
