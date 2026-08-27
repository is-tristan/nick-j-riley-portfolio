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

// Metadata
export const metadata = {
  title: "Professional Drone Pilot & Aerial Cinematographer | Cape Town",
  description: "Experienced Cape Town drone pilot with 6+ years in professional aerial production. Available for direct hire, commercial work, photography, videography and film.",
};

// Components
import Header from "@/components/layouts/header/header";
import SmoothScroll from "@/components/handlers/smooth-scroll";

export default function RootLayout({ children }) {

  return (

    <html lang="en" className={satoshi.variable} data-scroll-behavior="smooth">

      <body className={satoshi.className}>

        <div id="app" className="app">

            <SmoothScroll />

            <Header />

            <main id="main" className="main" aria-label="Main content">

              {children}

            </main>

          </div>

      </body>

    </html>

  );
}
