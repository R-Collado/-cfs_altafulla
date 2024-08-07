import { defineConfig } from 'astro/config';
import icon from 'astro-icon';

import react from "@astrojs/react";

// https://astro.build/config
export default defineConfig({
  i18n: {
    defaultLocale: 'es',
    locales: ['en', 'es', 'ca']
  },
  integrations: [icon(), react()]
});