import i18n from 'i18next';
import {initReactI18next} from 'react-i18next';
import EN from './languages/EN.json'
import JP from './languages/JP.json'


const resources = {
    en: {
        translation: EN
    },
    jp: {
        translation: JP
    },
}

i18n.use(initReactI18next)
    .init({
        resources,
        lng: 'jp',
        keySeparator: false,
        interpolation: {
            escapeValue: false
        }
    })

export default i18n;