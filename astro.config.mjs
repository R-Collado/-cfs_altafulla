import { defineConfig } from 'astro/config';

import icon from 'astro-icon';
import astroI18next from 'astro-i18next';

// https://astro.build/config
export default defineConfig({
    i18n: {
        defaultLocale: 'es',
        locales: ['en', 'es', 'ca'],
    },
    integrations: [icon(), astroI18next()],
});
