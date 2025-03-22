
<script setup>

import { getRandomColorName } from '@/js/useful';

const props = defineProps({
    spaDetails: {
        type: Object,
        default: () => ({})
    },
});

const randomColor = getRandomColorName();
const randomColor1 = getRandomColorName();

</script>

<template>
  <div class="bg-white rounded-xl shadow-md overflow-hidden transform transition-all duration-300 hover:shadow-xl hover:scale-105 cursor-pointer" @click="$emit('click', spaDetails)">
    <div :class="'bg-gradient-to-r from-'+randomColor+'-400 to-'+randomColor1+'-500 h-3'"></div>
    <div class="p-5">
      <h2 class="text-xl font-semibold text-gray-800">{{ spaDetails.name }}</h2>
      <p class="text-gray-600 mt-2 line-clamp-2">{{ spaDetails.description }}</p>
      <div class="flex items-center mt-3 text-sm text-gray-500">
        <svg :class="'w-4 h-4 mr-1 text-'+randomColor+'-500'" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
          <path fill-rule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clip-rule="evenodd" />
        </svg>
        {{ spaDetails.location }}
      </div>
      <button :class="'mt-4 w-full py-2 bg-gradient-to-r from-'+randomColor+'-400 to-'+randomColor1+'-500 text-white font-medium rounded-lg text-sm hover:from-'+randomColor+'-500 hover:to-'+randomColor1+'-600 focus:outline-none focus:ring-2 focus:ring-'+randomColor1+'-500 focus:ring-opacity-50'">
        Voir les détails
      </button>
    </div>
  </div>
</template>