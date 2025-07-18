<template>
    <div class="flex justify-center items-center w-full h-full px-4">
        <div class="w-full max-w-md bg-black/80 rounded-xl px-4 mb-8 shadow-2xl">
            <Galleria :value="images" :responsiveOptions="responsiveOptions" :numVisible="5"
                :circular="true" :autoPlay="true" :transitionInterval="3000"
                :showThumbnails="true" :showItemNavigators="true" :showIndicators="false"
                thumbnailsPosition="bottom">
                <template #item="slotProps">
                    <div class="flex items-center justify-center" style="height: 69vh;">
                        <img :src="slotProps.item.itemImageSrc" :alt="slotProps.item.alt" 
                             class="max-h-full max-w-full object-contain rounded-lg" />
                    </div>
                </template>
                <template #thumbnail="slotProps">
                    <img :src="slotProps.item.thumbnailImageSrc" :alt="slotProps.item.alt" 
                         class="w-5 h-14 object-cover rounded" />
                </template>
            </Galleria>
        </div>
    </div>
</template>

<script setup>
import { ref, onMounted } from "vue";
// Importa tu propio servicio de fotos en lugar del de PrimeVue
import { getMyPhotos } from '@/data/myPhotos'; // ¡Cambia esta línea!
import Galleria from 'primevue/galleria';

onMounted(() => {
    // Llama a tu función para obtener las imágenes
    getMyPhotos().then((data) => (images.value = data));
});

const images = ref();
const responsiveOptions = ref([
    {
        breakpoint: '1300px',
        numVisible: 4
    },
    {
        breakpoint: '768px',
        numVisible: 3
    },
    {
        breakpoint: '575px',
        numVisible: 2
    }
]);
</script>
