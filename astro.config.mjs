import { defineConfig } from 'astro/config';

import icon from 'astro-icon';

// https://astro.build/config
export default defineConfig({
    i18n: {
        locales: ['en', 'es', 'ca'],
        routing: {
            prefixDefaultLocale: true,
        },
    },
    integrations: [icon()],
});
