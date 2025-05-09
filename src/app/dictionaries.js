import 'server-only'

const dictionaries = {
	en: () => import('@/i18n/dictionaries/en.json').then((module) => module.default),
	es: () => import('@/i18n/dictionaries/es.json').then((module) => module.default),
}

export const getDictionary = async (locale) => dictionaries[locale]()