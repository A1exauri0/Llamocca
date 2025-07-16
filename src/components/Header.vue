<template>
    <div class="card">
        <Menubar :model="items">
            <!-- Slot 'start' para el título o logo -->
            <template #start>
                <div class="navbar-title" style="margin-right: 2rem;">
                    <h3>Maria Llamocca</h3>
                </div>
            </template>

            <!-- Slot 'center' para la barra de búsqueda -->
            <template #center>
                <InputText placeholder="Search" class="w-full" />
            </template>

            <!-- Slot 'end' para el botón de modo oscuro con icono -->
            <template #end>
                <!-- Botón de PrimeVue con icono dinámico -->
                <Button :icon="darkModeIcon" class="p-button-rounded p-button-text p-button-secondary"
                    @click="toggleDarkMode" aria-label="Toggle Dark Mode" />
            </template>
        </Menubar>
    </div>
</template>

<script setup>
import { ref, computed, onMounted, watch } from "vue";
import Menubar from 'primevue/menubar';
import Button from 'primevue/button';
import InputText from 'primevue/inputtext';

// Variable reactiva para controlar el estado del modo oscuro
const isDarkMode = ref(false);

// Función para alternar el modo oscuro
const toggleDarkMode = () => {
    isDarkMode.value = !isDarkMode.value; // Simplemente invierte el valor
};

// Propiedad computada para determinar el icono a mostrar
const darkModeIcon = computed(() => {
    return isDarkMode.value ? 'pi pi-moon' : 'pi pi-sun';
});

// Observa los cambios en isDarkMode y aplica/quita la clase 'my-app-dark'
watch(isDarkMode, (newValue) => {
    if (newValue) {
        document.documentElement.classList.add('my-app-dark');
    } else {
        document.documentElement.classList.remove('my-app-dark');
    }
});

// Al montar el componente, verifica el estado inicial del modo oscuro
onMounted(() => {
    isDarkMode.value = document.documentElement.classList.contains('my-app-dark');
});


const items = ref([
    {
        label: 'Home',
        icon: 'pi pi-home'
    },
    {
        label: 'Features',
        icon: 'pi pi-star'
    },
    {
        label: 'Projects',
        icon: 'pi pi-search',
        items: [
            {
                label: 'Components',
                icon: 'pi pi-bolt'
            },
            {
                label: 'Blocks',
                icon: 'pi pi-server'
            },
            {
                label: 'UI Kit',
                icon: 'pi pi-pencil'
            },
            {
                label: 'Templates',
                icon: 'pi pi-palette',
                items: [
                    {
                        label: 'Apollo',
                        icon: 'pi pi-palette'
                    },
                    {
                        label: 'Ultima',
                        icon: 'pi pi-palette'
                    }
                ]
            }
        ]
    },
    {
        label: 'Contact',
        icon: 'pi pi-envelope'
    },
]);
</script>
