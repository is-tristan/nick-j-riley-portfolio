import { logos } from "@/data/logo-data";
import { previousWorkData } from "@/data/previous-work-data";
import { titlesData } from "@/data/titles-data";
import { dronesData } from "@/data/drones-data";
import {
    siteAuthor,
    siteDescription,
    siteName,
    siteOgImage,
    siteProfileImage,
    siteSocial,
    siteTitle,
    siteUrl,
} from "@/utils/site";

const brandNames = logos.map((logo) => logo.name);

const productionCredits = previousWorkData.map((item) => item.title);

const filmAndTvTitles = titlesData.map((item) => `${item.title.trim()} (${item.type})`);

const dronePlatforms = dronesData.map((item) => item.title);

export const personJsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    "@id": `${siteUrl}/#person`,
    name: siteAuthor.name,
    alternateName: ["Nick J Riley", "Nick Riley drone pilot"],
    url: siteUrl,
    image: siteProfileImage,
    jobTitle: "Drone Pilot & Aerial Cinematographer",
    description: siteDescription,
    knowsAbout: [
        "Aerial cinematography",
        "FPV drone flying",
        "Film production",
        "Advertising production",
        "Drone cinematography",
        "Cape Town film industry",
        ...dronePlatforms,
    ],
    address: {
        "@type": "PostalAddress",
        addressLocality: "Cape Town",
        addressCountry: "ZA",
    },
    areaServed: {
        "@type": "Country",
        name: "South Africa",
    },
    sameAs: [siteSocial.instagram],
    worksFor: {
        "@type": "Organization",
        name: "Affiliate production company",
        description: "Nick quotes and delivers aerial work through an affiliate production company that supplies production drones.",
    },
};

export const websiteJsonLd = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": `${siteUrl}/#website`,
    name: siteName,
    url: siteUrl,
    description: siteDescription,
    inLanguage: "en-ZA",
    publisher: {
        "@id": `${siteUrl}/#person`,
    },
};

export const professionalServiceJsonLd = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    "@id": `${siteUrl}/#service`,
    name: siteTitle,
    url: siteUrl,
    image: siteOgImage,
    description: siteDescription,
    provider: {
        "@id": `${siteUrl}/#person`,
    },
    areaServed: {
        "@type": "Country",
        name: "South Africa",
    },
    serviceType: [
        "Aerial cinematography",
        "FPV drone cinematography",
        "Film production drone piloting",
        "Advertising aerial production",
    ],
    audience: {
        "@type": "Audience",
        audienceType: "Film production companies and advertising agencies",
    },
    brand: brandNames.map((name) => ({
        "@type": "Brand",
        name,
    })),
    hasOfferCatalog: {
        "@type": "OfferCatalog",
        name: "Aerial cinematography services",
        itemListElement: [
            {
                "@type": "Offer",
                itemOffered: {
                    "@type": "Service",
                    name: "Freelance aerial cinematography",
                    description: "Production-level drone piloting for film and advertising, quoted through an affiliate production company.",
                },
            },
        ],
    },
    subjectOf: [
        ...productionCredits.map((name) => ({
            "@type": "CreativeWork",
            name,
        })),
        ...filmAndTvTitles.map((name) => ({
            "@type": "CreativeWork",
            name,
        })),
    ],
};
