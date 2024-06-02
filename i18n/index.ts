import {type Composer, createI18n, useI18n as useI18n_, type UseI18nOptions} from "vue-i18n";
import enUS from "./locales/en-US.json";
import frFR from "./locales/fr-FR.json";
import arMA from "./locales/ar-MA.json";

const config = {
    legacy: false,
    locale: getPersistedLocale() || "fr",
    fallbackLocale: "en",
    strategy: "no_prefix",
    globalInjection: true,
    messages: {
        en: enUS,
        fr: frFR,
        ar: arMA,
    },
    isAdjectiveBeforeNoun: {
        en: true,
        fr: false,
        ar: false,
    },
};

function getPersistedLocale() {
    if (process.browser && localStorage && localStorage.getItem("persisted-locale")) {
        return localStorage.getItem("persisted-locale");
    }
}

function abn(locale: keyof (typeof config)["isAdjectiveBeforeNoun"]) {
    return config.isAdjectiveBeforeNoun[locale];
}

const i18n = createI18n(config);

const t = i18n.global.t;

export type MessageSchema = typeof enUS | typeof frFR | typeof arMA;

declare function useI18nFn<Options extends UseI18nOptions = UseI18nOptions<{ message: MessageSchema }>>(
    options?: Options
): Composer<
    NonNullable<Options["messages"]>,
    NonNullable<Options["datetimeFormats"]>,
    NonNullable<Options["numberFormats"]>,
    Options["locale"] extends unknown ? string : Options["locale"]
>;

const useI18N = useI18n_ as typeof useI18nFn;

export {i18n, t, config, abn, useI18N};
