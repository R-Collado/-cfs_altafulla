export const languages = {
    es: 'Español',
    ca: 'Català',
    en: 'English',
};

export const defaultLang = 'es';

export const ui = {
    es: {
        'inDev.title': 'En desarrollo',
        'inDev.header': 'Lo sentimos! Estamos en desarrollo',
        'inDev.message':
            'Estamos desarrollando nuestra página web, para cualquier duda o información estamos disponibles en nuestras redes sociales:',
    },
    ca: {
        'inDev.title': 'Pàgina en desenvolupament',
        'inDev.header': 'Ho sentim! Estem en desenvolupament',
        'inDev.message':
            'Estem desenvolupant la nostra pàgina web, si teniu qualsevol dubte o consulta estem disponibles a les nostres xarxes socials:',
    },
    en: {
        'inDev.title': 'Site in Progress',
        'inDev.header': "We're sorry! The site is in development",
        'inDev.message':
            'We are currently developing our website, please wait a little bit more! We are available if you need to contact us in our socials:',
    },
} as const;
