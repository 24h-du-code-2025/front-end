
<script setup>

import { computed } from 'vue';

const props = defineProps({
    message: {
        type: Object,
        default: () => ({})
    },
});

const weatherDetails = computed(() => props.message.content);
const weatherLabel = computed(() => {
    switch (weatherDetails.value.weather_type) {
        case 'sunny':
            return 'Ensoleillé';
        case 'cloudy':
            return 'Nuageux';
        case 'rain':
            return 'Pluie';
        case 'storm':
            return 'Orage';
    }
});
const weatherColors = computed(() => {
    switch (weatherDetails.value.weather_type) {
        case 'sunny':
            return ['from-amber-400', 'to-amber-500', 'border-blue-300'];
        case 'cloudy':
            return ['from-zinc-300', 'to-zinc-400', 'border-zinc-500'];
        case 'rain':
          return ['from-blue-600', 'to-blue-800', 'border-blue-300'];
        case 'storm':
          return ['from-zinc-600', 'to-zinc-900', 'border-yellow-500'];
    }
});
</script>

<template>

<div class="bg-gradient-to-br rounded-xl shadow-lg overflow-hidden max-w-sm w-full border-2 " :class="weatherColors">

    <!-- Section principale -->
    <div class="relative p-6 text-center">
      <!-- Éléments décoratifs -->
      <div class="absolute top-0 right-0 w-32 h-32 -mt-16 -mr-16 bg-yellow-300 rounded-full opacity-20"></div>
      <div class="absolute bottom-0 left-0 w-24 h-24 -mb-12 -ml-12 bg-yellow-300 rounded-full opacity-20"></div>

      <!-- En-tête avec nom de la ville -->
      <h2 class="text-white font-bold text-3xl mb-1 relative z-10" id="city-name">{{ weatherDetails.city }}</h2>
      <p class="text-blue-100 text-sm mb-6 relative z-10" id="current-date">Aujourd'hui</p>

      <!-- Icône météo -->
      <div class="flex justify-center mb-4 relative z-10" id="weather-icon-container">
        <!-- L'icône sera injectée par le script -->
      </div>

      <!-- Température -->
      <div class="relative z-10">
        <span class="text-white font-bold text-6xl" id="temperature">{{ weatherDetails.temperature }}</span>
      </div>

      <!-- Type de temps -->
      <p class="text-white font-medium text-xl mt-2 relative z-10" id="weather-type">{{ weatherLabel }}</p>
    </div>

    <!-- Informations complémentaires -->
    <div class="bg-white px-6 py-4">
      <div class="grid grid-cols-3 gap-4 text-center">
        <div>
          <p class="text-gray-500 text-xs">Humidité</p>
          <p class="text-gray-700 font-medium">{{ weatherDetails.humidity }}</p>
        </div>
        <div>
          <p class="text-gray-500 text-xs">Vent</p>
          <p class="text-gray-700 font-medium">{{ weatherDetails.wind }}</p>
        </div>
        <div>
          <p class="text-gray-500 text-xs">Ressenti</p>
          <p class="text-gray-700 font-medium">{{ weatherDetails.temperature }}</p>
        </div>
      </div>
    </div>
</div>
</template>