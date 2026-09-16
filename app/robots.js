import {
    siteUrl,
} from "@/utils/site";

export default function robots() {

    return {

        rules: [
            {
                userAgent: "*",
                allow: "/",
            },
            {
                userAgent: "GPTBot",
                allow: "/",
            },
            {
                userAgent: "ChatGPT-User",
                allow: "/",
            },
            {
                userAgent: "Google-Extended",
                allow: "/",
            },
            {
                userAgent: "ClaudeBot",
                allow: "/",
            },
            {
                userAgent: "Anthropic-AI",
                allow: "/",
            },
            {
                userAgent: "PerplexityBot",
                allow: "/",
            },
            {
                userAgent: "Applebot-Extended",
                allow: "/",
            },
        ],
        sitemap: `${siteUrl}/sitemap.xml`,
        host: siteUrl,

    };

}
