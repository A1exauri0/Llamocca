// src/main.js
import "./assets/main.css";

import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";

// PrimeVue
import PrimeVue from "primevue/config";
import Aura from "@primeuix/themes/aura";

// Vue I18n para traducción
import { createI18n } from "vue-i18n";

// Archivos de traducción
import español from "./locales/español";
import english from "./locales/english";

// Crea la instancia de i18n
const i18n = createI18n({
  locale: "es", // Establece el idioma predeterminado a español
  fallbackLocale: "en", // Idioma de respaldo si una traducción no se encuentra
  messages: {
    es: español, // Mensajes en español
    en: english, // Mensajes en inglés
  },
  legacy: false, // Usa la API de composición (Composition API)
  globalInjection: true, // Permite usar $t en el template sin importarlo
});


const app = createApp(App);

// Configura PrimeVue
app.use(PrimeVue, {
  theme: {
    preset: Aura,
    options: {
      darkModeSelector: ".my-app-dark", // Selector para el modo oscuro
    },
  },
});

app.use(router);
app.use(i18n);

app.mount("#app");
