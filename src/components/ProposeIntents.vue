
<script setup>

import { computed } from 'vue';

const emit = defineEmits(['click']);

const props = defineProps({
    message: {
        type: Object,
        default: () => ({})
    },
});

const proposeIntents = computed(() => props.message.content);

</script>

<template>
<div class="bg-white rounded-xl shadow-lg overflow-hidden max-w-md w-full border-2 border-yellow-200 p-6">
    <!-- En-tête -->
    <div class="text-center mb-6">
      <h2 class="text-amber-800 font-bold text-2xl">Faites votre choix</h2>
      <p class="text-amber-600 mt-1">Sélectionnez une option</p>
    </div>

    <!-- Liste de boutons cliquables -->
    <div class="space-y-3">

      <button class="w-full text-left p-4 bg-amber-50 rounded-lg border-l-4 border-amber-400 hover:bg-amber-100 transition-colors duration-200 group cursor-pointer" v-for="intent in proposeIntents" @click="emit('click', intent)">
        <div class="flex items-center">
          <div class="flex-1">
            <h3 class="font-medium text-amber-800">{{ intent.title }}</h3>
            <p class="text-amber-600 text-sm mt-1">{{ intent.prompt }}</p>
          </div>
          <div class="text-amber-400 group-hover:text-amber-500">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
            </svg>
          </div>
        </div>
      </button>
    </div>
    </div>
</template>