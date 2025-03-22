
<script setup>

import { computed } from 'vue';

import SpaSimpleCard from '@/components/SpaSimpleCard.vue';

const emit = defineEmits(['click']);

const props = defineProps({
    message: {
        type: Object,
        default: () => ({})
    },
});

const spaList = computed(() => props.message.content);

</script>

<template>
  <div class="max-w-4xl mx-auto">
    <!-- <h1 class="text-3xl font-bold text-gray-800 mb-6 text-center"></h1> -->
    <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
      <SpaSimpleCard v-for="spaDetails in spaList" :spa-details="spaDetails" @click="(message) => emit('click', message)" />
    </div>
  </div>
</template>