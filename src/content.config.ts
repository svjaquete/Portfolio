import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const projects = defineCollection({
  loader: glob({ pattern: '**/*.{md,mdx}', base: './src/content/projects' }),
  schema: z.object({
    title: z.string(),
    subtitle: z.string().optional(),
    summary: z.string(),
    role: z.string().optional(),
    tools: z.array(z.string()),
    coverImage: z.string().optional(),
    cardImages: z.array(z.string()).optional(),
    heroVideo: z.string().optional(),
    heroVideoWidth: z.string().optional(),
    link: z.string().url().optional(),
    order: z.number().default(99),
  }),
});

export const collections = { projects };
