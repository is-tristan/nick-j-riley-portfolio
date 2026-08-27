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
  title: "Nick Riley | Drone Pilot & Aerial Cinematographer | South Africa",
  description: "Nick Riley is a South African drone pilot with 6 years of film and advertising production experience for major brands. Available for freelance aerial cinematography through his affiliate production company.",
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
