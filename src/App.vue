<template>
  <header class="w-full bg-surface-card shadow-md px-6 py-4">
    <Header />
  </header>
  <router-view />
  <footer>
    <Footer />
  </footer>
</template>

<script setup>
import Header from './components/Header.vue';
import Footer from './components/Footer.vue';
</script>