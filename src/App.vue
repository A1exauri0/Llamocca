<template>

  <Button :label="isDarkMode ? 'Modo Claro' : 'Modo Oscuro'" @click="toggleDarkMode" />
</template>



<script setup>
import { ref, onMounted } from 'vue';
import Button from 'primevue/button'; // Importa el componente Button de PrimeVue
import Card from 'primevue/card';

// Variable reactiva para saber si estamos en modo oscuro
const isDarkMode = ref(false);

// Función para alternar el modo oscuro
const toggleDarkMode = () => {
  const htmlElement = document.documentElement;
  if (htmlElement.classList.contains('app-dark-mode')) {
    htmlElement.classList.remove('app-dark-mode');
    isDarkMode.value = false;
  } else {
    htmlElement.classList.add('app-dark-mode');
    isDarkMode.value = true;
  }
  // O de forma más concisa:
  // htmlElement.classList.toggle('app-dark-mode');
  // isDarkMode.value = htmlElement.classList.contains('app-dark-mode');

  // Opcional: Guarda la preferencia en localStorage para que se recuerde
  localStorage.setItem('theme-mode', isDarkMode.value ? 'dark' : 'light');
};

// Al cargar la aplicación, verifica la preferencia guardada o el sistema
onMounted(() => {
  const savedMode = localStorage.getItem('theme-mode');
  if (savedMode === 'dark') {
    document.documentElement.classList.add('app-dark-mode');
    isDarkMode.value = true;
  } else if (savedMode === 'light') {
    document.documentElement.classList.remove('app-dark-mode');
    isDarkMode.value = false;
  } else {
    // Si no hay preferencia guardada, usa la preferencia del sistema
    if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
      document.documentElement.classList.add('app-dark-mode');
      isDarkMode.value = true;
    }
  }
});
</script>
