import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const articles = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/articles' }),
  schema: z.object({
    title: z.string(),
    subtitle: z.string().optional(),
    category: z.string(),
    pubDate: z.coerce.date(),
    description: z.string().optional(),
    heroImage: z.string().optional(),
  }),
});

export const collections = { articles };
