import { siteUrl } from "@/utils/site";

export default function sitemap() {

    return [
        {
            url: siteUrl,
            lastModified: new Date(),
            changeFrequency: "monthly",
            priority: 1,
        },
    ];

}
