
<script setup>

  import StartChats from '@/components/StartChats.vue';
  import ChatMessage from '@/components/ChatMessage.vue';

  const props = defineProps({
    messages: Array
  })
</script>

<template>
  <div>
    <StartChats v-if="messages.length <= 0" />
    <ChatMessage v-for="message in messages" :message="message" :direction="message.from == 'user' ? 'right' : 'left'" v-else />
  </div>
</template>

<style scoped>

</style>