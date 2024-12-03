import { defineConfig } from "astro/config";
import vercel from '@astro/vercel';

// https://astro.build/config
export default defineConfig({
  output: "static",
  adapter: vercel(),
});
