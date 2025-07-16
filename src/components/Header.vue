<template>
    <div class="card">
        <Menubar :model="items">
            <!-- Slot 'start' para el título o logo -->
            <template #start>
                <div class="navbar-title" style="margin-right: 2rem;">
                    <h3>Maria Llamocca</h3>
                </div>
            </template>

            <!-- Slot 'end' para el botón de modo oscuro con icono  -->
            <template #end>
                <div class="flex align-items-center gap-2">
                    <!-- Botón de PrimeVue con icono dinámico -->
                    <Button :icon="darkModeIcon" class="p-button-rounded p-button-text p-button-secondary"
                        @click="toggleDarkMode" aria-label="Toggle Dark Mode" style="margin-right: 1rem;" />

                    <!-- Selector de idioma -->
                    <Select v-model="selectedLanguage" :options="languageOptions" optionLabel="name" optionValue="code"
                        @change="changeLanguage" class="w-8rem">
                        <!-- Mostrar opciones -->
                        <template #option="slotProps">
                            <div class="flex items-center gap-2">
                                <img :src="`https://flagcdn.com/w20/${slotProps.option.flag}.png`"
                                    :alt="slotProps.option.name"
                                    style="width: 20px; height: 15px; margin-right: 0.5rem; margin-top: 0.2rem;" />
                                <span>{{ slotProps.option.name }}</span>
                            </div>
                        </template>
                    </Select>

                </div>
            </template>
        </Menubar>
    </div>
</template>

<script setup>
import { ref, computed, onMounted, watch } from "vue";
import Menubar from 'primevue/menubar';
import Button from 'primevue/button';
import Select from 'primevue/Select';

// Importa useI18n para acceder a la instancia de i18n en el Composition API
import { useI18n } from 'vue-i18n';

// Obtén la instancia de i18n para acceder a 'locale' y 't' (función de traducción)
const { locale, t } = useI18n();

// ----------------------------------------------------
// Lógica de Idioma
// ----------------------------------------------------
// selectedLanguage: Variable reactiva para el valor seleccionado en el Select
const selectedLanguage = ref(locale.value); // Inicializa con el idioma actual de i18n

// languageOptions: Opciones para el Select de selección de idioma
const languageOptions = ref([
    { name: 'ES', code: 'es', flag: 'es' },
    { name: 'EN', code: 'en', flag: 'us' }
]);

// changeLanguage: Función que se ejecuta al cambiar la selección del Select
const changeLanguage = () => {
    locale.value = selectedLanguage.value; // Actualiza el idioma global de i18n
};

// ----------------------------------------------------
// Lógica de Modo Oscuro
// ----------------------------------------------------
// isDarkMode: Variable reactiva para controlar el estado del modo oscuro
const isDarkMode = ref(false);

// toggleDarkMode: Función para alternar el estado del modo oscuro
const toggleDarkMode = () => {
    isDarkMode.value = !isDarkMode.value;
};

// darkModeIcon: Propiedad computada que devuelve el icono (sol/luna) según el estado de isDarkMode
const darkModeIcon = computed(() => {
    return isDarkMode.value ? 'pi pi-moon' : 'pi pi-sun';
});

// watch: Observa los cambios en isDarkMode y aplica/quita la clase 'my-app-dark' en el elemento <html>
watch(isDarkMode, (newValue) => {
    if (newValue) {
        document.documentElement.classList.add('my-app-dark');
    } else {
        document.documentElement.classList.remove('my-app-dark');
    }
});

// onMounted: Se ejecuta cuando el componente se monta. Verifica el estado inicial del modo oscuro
// para sincronizar 'isDarkMode' y el icono del botón.
onMounted(() => {
    isDarkMode.value = document.documentElement.classList.contains('my-app-dark');
});

// ----------------------------------------------------
// Elementos del Menú (Traducidos)
// ----------------------------------------------------
// items: Propiedad computada para los elementos del Menubar.
// Se usa una propiedad computada para que los labels se actualicen
// automáticamente cuando cambie el idioma (locale).
const items = computed(() => [
    {
        label: t('menu.home'), // Usa t() para traducir
        icon: 'pi pi-home'
    },
    {
        label: t('menu.features'),
        icon: 'pi pi-star'
    },
    {
        label: t('menu.projects'),
        icon: 'pi pi-search',
        items: [
            {
                label: t('menu.components'),
                icon: 'pi pi-bolt'
            },
            {
                label: t('menu.blocks'),
                icon: 'pi pi-server'
            },
            {
                label: t('menu.uiKit'),
                icon: 'pi pi-pencil'
            },
            {
                label: t('menu.templates'),
                icon: 'pi pi-palette',
                items: [
                    {
                        label: t('menu.apollo'),
                        icon: 'pi pi-palette'
                    },
                    {
                        label: t('menu.ultima'),
                        icon: 'pi pi-palette'
                    }
                ]
            }
        ]
    },
    {
        label: t('menu.contact'),
        icon: 'pi pi-envelope'
    },
]);
</script>
