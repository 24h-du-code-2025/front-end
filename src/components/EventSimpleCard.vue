
<script setup>

const props = defineProps({
    eventDetails: {
        type: Object,
        default: () => ({})
    },
});

</script>

<template>
  <div class="max-w-xs bg-white rounded-lg shadow-md overflow-hidden">
    <img class="h-32 w-full object-cover" :src="eventDetails.image_url" :alt="eventDetails.title">
    <div class="p-4">
      <div class="flex justify-between items-center">
        <span class="px-2 py-1 text-xs font-semibold bg-indigo-100 text-indigo-800 rounded-full">{{ eventDetails.category }}</span>
        <span class="text-xs text-gray-500">{{ eventDetails.date }}</span>
      </div>
      <h3 class="mt-2 font-bold text-gray-800 line-clamp-1">{{ eventDetails.title }}</h3>
      <p class="mt-1 text-xs text-gray-600 line-clamp-3">{{ eventDetails.description }}</p>
      <a class="mt-3 w-full px-3 py-1 text-xs font-medium text-white bg-indigo-600 rounded hover:bg-indigo-700" :href="eventDetails.link">
        Réserver
      </a>
    </div>
  </div>
</template>