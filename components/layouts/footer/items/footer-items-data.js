// Footer Items
export const company = {
  title: "By Industries",
  items: [
    {
      label: "Retail",
      href: "/solutions/by-industry/retail",
    },
    {
      label: "Leisure and Hospitality",
      href: "/solutions/by-industry/leisure-and-hospitality",
    },
    {
      label: "Restaurants",
      href: "/solutions/by-industry/restaurants",
    },
    {
      label: "Healthcare",
      href: "/solutions/by-industry/healthcare",
    },
    {
      label: "Facilities Management",
      href: "/solutions/by-industry/facilities-management",
    },
    {
      label: "Venues and Events",
      href: "/solutions/by-industry/venues-and-events",
    },
  ],
};

export const solutions = {
  title: "By Role",
  items: [
    {
      label: "CX Leaders",
      href: "/solutions/by-role/cx-leaders",
    },
    {
      label: "Operations Directors",
      href: "/solutions/by-role/operations-directors",
    },
    {
      label: "Compliance Managers",
      href: "/solutions/by-role/compliance-managers",
    },
  ],
};

export const products = {
  title: "By Challenge",
  items: [
    {
      label: "Inconsistent standards",
      href: "/solutions/by-challenge/inconsistent-standards",
    },
    {
      label: "Siloed tools and data",
      href: "/solutions/by-challenge/siloed-tools-and-data",
    },
    {
      label: "Proof of improvement",
      href: "/solutions/by-challenge/prove-improvement",
    },
    {
      label: "Data to action",
      href: "/solutions/by-challenge/data-to-action",
    },
  ],
};

export const explore = {
  title: "Explore",
  items: [
    {
      label: "Meet EVA",
      href: "/eva",
    },
    {
      label: "About us",
      href: "/company/about",
    },
    {
      label: "What we do",
      href: "/what-does-serve-first-do",
    },
    {
      label: "Contact us",
      href: "/company/contact-us",
    },
    {
      label: "Blog",
      href: "/resources/blog",
    },
    {
      label: "Media",
      href: "/resources/media",
    },
  ],
};

export const footerPolicyItems = [
  {
    label: "Privacy Policy",
    href: "/legal/privacy-policy",
  },
  {
    label: "Cookies Policy",
    href: "/legal/cookie-policy",
  },
//   {
//     label: "Accessibility",
//     href: "/legal/accessability",
//   },
  {
    label: "Sitemap",
    href: "/sitemap.xml",
  },
];

// Contact Items
import { emailIcon, mapPinIcon } from "@/utils/icons";

export const footerContactItems = {
  email: {
    label: "Email Us",
    text: "info@servefirst.co.uk",
    href: "mailto:info@servefirst.co.uk",
    icon: emailIcon,
  },
  address: {
    label: "Based in",
    text: "Milton Keynes, UK",
    icon: mapPinIcon,
  },
};

// Social Items
import { facebookIcon, instagramIcon, linkedInIcon } from "@/utils/icons";

export const footerSocialItems = {
  facebook: {
    label: "Facebook",
    href: "https://www.facebook.com/servefirstcx",
    icon: facebookIcon,
  },
  instagram: {
    label: "Instagram",
    href: "https://www.instagram.com/servefirstcx",
    icon: instagramIcon,
  },
  linkedIn: {
    label: "LinkedIn",
    href: "https://www.linkedin.com/company/serve-first-cx",
    icon: linkedInIcon,
  },
};
