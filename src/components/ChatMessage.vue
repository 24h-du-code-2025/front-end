
<script setup>

    import { computed } from 'vue';

    import ChatCard from '@/components/ChatCard.vue';

    const props = defineProps({
        message: {
            type: Object,
            default: () => ({})
        },
        direction:  {
            type: String,
            default: 'left'
        }
    });

    const created = computed(() => new Date());
    const createdHour = computed(() => created.value.getHours() + ':' + created.value.getMinutes());
</script>

<template>
<div class="chat chat-start" v-if="direction == 'left'">
  <div class="chat-image avatar">
    <div class="w-10 rounded-full bg-gradient-to-r from-indigo-400 to-cyan-300 p-1 shadow-md">
      <img alt="Hotel California chat" src="https://i.luwe.fr/XKaRXJVYlv.png" class="rounded-full" />
    </div>
  </div>
  <div class="chat-header text-gray-800 font-medium">
    Luc Mergault
    <time class="text-xs opacity-70 text-gray-600">{{ createdHour }}</time>
  </div>
  <ChatCard :message="message" :direction="direction" />
</div>

<div class="chat chat-end" v-else-if="direction == 'right'">
  <div class="chat-image avatar">
    <div class="w-10 rounded-full bg-gradient-to-r from-amber-400 to-orange-500 p-1 shadow-md">
      <img alt="Hotel California chat" src="https://i.luwe.fr/XKaRXJVYlv.png" class="rounded-full" />
    </div>
  </div>
  <div class="chat-header text-gray-800 font-medium">
    Luc Mergault
    <time class="text-xs opacity-70 text-gray-600">{{ createdHour }}</time>
  </div>
  <ChatCard :message="message" :direction="direction" />
</div>
</template>