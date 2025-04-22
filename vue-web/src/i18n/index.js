import { createI18n } from "vue-i18n";
import enLocale from "./en";
import zhLocale from "./zh";

const messages = {
  en: {
    ...enLocale,
  },
  zh: {
    ...zhLocale,
  },
};

const i18n = createI18n({
  legacy: false, //表示使用 Composition API 的方式。
  locale: localStorage.getItem("i18n"), // 设置语种
  messages, // 设置全局当地语言包,
  fallbackLocale: "zh",
});

export default i18n;
