
<script setup>

  import ChatMessage from '@/components/ChatMessage.vue';

  const props = defineProps({
    messages: Array
  })
</script>

<template>
  <div>
    <ChatMessage v-for="message in messages" :message="message" :direction="message.from == 'user' ? 'right' : 'left'" />
  </div>
</template>