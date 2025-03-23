
<script setup>

import { computed } from 'vue';

const props = defineProps({
    message: {
        type: Object,
        default: () => ({})
    },
});

const bookingDetails = computed(() => props.message.content);

</script>

<template>
  <div class="bg-white rounded-xl shadow-lg overflow-hidden max-w-md w-full border-2 border-yellow-200">
    <!-- En-tête de la carte avec style plus chaleureux -->
    <div class="bg-amber-500 px-6 py-4 relative overflow-hidden">
      <div class="absolute top-0 right-0 w-32 h-32 -mt-8 -mr-8 bg-amber-400 rounded-full opacity-30"></div>
      <div class="absolute bottom-0 left-0 w-20 h-20 -mb-6 -ml-6 bg-amber-400 rounded-full opacity-30"></div>
      <h2 class="text-white font-bold text-2xl relative z-10">Nous vous attendons !</h2>
      <p class="text-amber-100 font-medium relative z-10">Votre table est réservée</p>
    </div>

    <!-- Logo et nom du restaurant -->
    <div class="p-6 border-b border-yellow-100">
      <div class="flex items-center">
        <div class="bg-amber-100 p-3 rounded-full mr-4">
          <svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8 text-amber-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13.325 14.322c1.884-1.873 2.315-4.681.964-6.756-1.351-2.077-4.108-2.947-6.422-2.019.19-2.395-1.202-4.644-3.342-5.403s-4.69-.226-6.039 1.884c-1.348 2.11-.755 4.929 1.384 6.55-2.72.595-4.471 3.284-3.88 5.984.59 2.698 3.26 4.463 5.981 3.923 2.721-.54 4.516-3.106 4.003-5.71.516.488 1.132.856 1.798 1.078.665.222 1.369.271 2.055.144.687-.127 1.335-.405 1.926-.812.59-.408 1.086-.935 1.46-1.543"></path>
          </svg>
        </div>
        <div>
          <h3 class="font-bold text-xl text-amber-800" id="restaurant-name">{{ bookingDetails.restaurant_name }}</h3>
          <p class="text-amber-600" id="restaurant-location">{{ bookingDetails.restaurant_location }}</p>
        </div>
      </div>
    </div>
    <!-- Détails de la réservation -->
    <div class="p-6 bg-gradient-to-br from-white to-yellow-50">
      <p class="text-amber-700 italic mb-6 text-center">Nous avons hâte de vous accueillir et de vous offrir une expérience culinaire mémorable !</p>

      <div class="mb-5 bg-amber-50 p-4 rounded-lg border-l-4 border-amber-400">
        <div class="flex items-center mb-2">
          <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-amber-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
          </svg>
          <span class="font-medium text-amber-800">Quand ?</span>
        </div>
        <p class="ml-7 text-amber-700 font-medium" id="reservation-date">{{ bookingDetails.reservation_date }}</p>
      </div>

      <div class="mb-5 bg-amber-50 p-4 rounded-lg border-l-4 border-amber-400">
        <div class="flex items-center mb-2">
          <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-amber-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
          </svg>
          <span class="font-medium text-amber-800">Qui ?</span>
        </div>
        <p class="ml-7 text-amber-700 font-medium" id="number-of-guests">{{ bookingDetails.number_of_guests }} personnes</p>
      </div>

      <div class="mb-5 bg-amber-50 p-4 rounded-lg border-l-4 border-amber-400">
        <div class="flex items-center mb-2">
          <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-amber-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
          </svg>
          <span class="font-medium text-amber-800">Votre choix :</span>
        </div>
        <p class="ml-7 text-amber-700 font-medium" id="meal">{{ bookingDetails.meal }}</p>
      </div>

      <div class="mb-6 bg-amber-50 p-4 rounded-lg border-l-4 border-amber-400">
        <div class="flex items-center mb-2">
          <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-amber-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 8h10M7 12h4m1 8l-4-4H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-3l-4 4z" />
          </svg>
          <span class="font-medium text-amber-800">Vos souhaits :</span>
        </div>
        <p class="ml-7 text-amber-700 font-medium" id="special-requests">{{ bookingDetails.special_requests }}</p>
      </div>
    </div>

    <!-- Pied de page plus personnalisé -->
    <div class="bg-amber-100 px-6 py-4 text-center">
      <p class="text-amber-700 font-medium">À très bientôt chez nous !</p>
      <p class="text-amber-600 text-sm mt-1">Pour toute question, n'hésitez pas à nous appeler</p>
    </div>
  </div>
</template>