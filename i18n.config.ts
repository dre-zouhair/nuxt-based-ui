import {config} from "~/i18n";

export default defineI18nConfig(() => ({
    ...config,
    legacy: false,
    locale: 'en'
}))
