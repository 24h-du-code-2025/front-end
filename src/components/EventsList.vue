
<script setup>

import { computed } from 'vue';

import EventSimpleCard from '@/components/EventSimpleCard.vue';

const emit = defineEmits(['click']);

const props = defineProps({
    message: {
        type: Object,
        default: () => ({})
    },
});

const eventsList = computed(() => props.message.content);

</script>

<template>
  <div class="p-4 flex items-center flex-wrap gap-4">
    <EventSimpleCard v-for="eventDetails in eventsList" :event-details="eventDetails"/>
  </div>
</template>