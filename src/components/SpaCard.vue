
<script setup>

import { computed } from 'vue';

const props = defineProps({
    message: {
        type: Object,
        default: () => ({})
    },
});

const spaDetails = computed(() => props.message.content);

</script>

<template>
  <div class="max-w-md w-full bg-white rounded-xl shadow-lg overflow-hidden">
    <!-- En-tête avec dégradé -->
    <div class="bg-gradient-to-r from-blue-400 to-purple-500 p-6">
      <h1 class="text-2xl font-bold text-white">{{ spaDetails.name }}</h1>
    </div>

    <!-- Contenu -->
    <div class="p-6">
      <!-- Description -->
      <div class="mb-4">
        <h2 class="text-lg font-semibold text-gray-700 mb-2">Description</h2>
        <p class="text-gray-600">{{ spaDetails.description }}</p>
      </div>

      <!-- Divider -->
      <div class="border-t border-gray-200 my-4"></div>

      <!-- Informations de contact -->
      <div class="space-y-3">
        <div class="flex items-start">
          <div class="flex-shrink-0 w-5 h-5 mt-1 text-blue-500">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
              <path fill-rule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clip-rule="evenodd" />
            </svg>
          </div>
          <div class="ml-3">
            <p class="text-sm font-medium text-gray-900">Adresse</p>
            <p class="text-sm text-gray-500">{{ spaDetails.location }}</p>
          </div>
        </div>

        <div class="flex items-start">
          <div class="flex-shrink-0 w-5 h-5 mt-1 text-blue-500">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
              <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
              <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
            </svg>
          </div>
          <div class="ml-3">
            <p class="text-sm font-medium text-gray-900">Email</p>
            <p class="text-sm text-gray-500">{{ spaDetails.email }}</p>
          </div>
        </div>

        <div class="flex items-start">
          <div class="flex-shrink-0 w-5 h-5 mt-1 text-blue-500">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
              <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
            </svg>
          </div>
          <div class="ml-3">
            <p class="text-sm font-medium text-gray-900">Téléphone</p>
            <p class="text-sm text-gray-500">{{ spaDetails.phone_number }}</p>
          </div>
        </div>

        <div class="flex items-start">
          <div class="flex-shrink-0 w-5 h-5 mt-1 text-blue-500">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
              <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clip-rule="evenodd" />
            </svg>
          </div>
          <div class="ml-3">
            <p class="text-sm font-medium text-gray-900">Horaires d'ouverture</p>
            <p class="text-sm text-gray-500">{{ spaDetails.opening_hours }}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>