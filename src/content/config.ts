import { defineCollection, z } from "astro:content";
import { docsSchema } from "@astrojs/starlight/schema";

const newsCollection = defineCollection({
  type: "content",
  // Type-check frontmatter using a schema
  schema: z.object({
    title: z.string(),
    description: z.string(),
    // Transform string to Date object
    pubDate: z.coerce.date(),
    updatedDate: z.coerce.date().optional(),
    heroImage: z.string().optional(),
  }),
});

export const collections = {
  docs: defineCollection({ schema: docsSchema() }),
  news: newsCollection,
};
