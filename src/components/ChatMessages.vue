
<script setup>

  import ChatMessage from '@/components/ChatMessage.vue';

  const props = defineProps({
    messages: Array
  })
</script>

<template>
  <div>
    <ChatMessage v-for="message in messages"
      :author-name="message.author.names.full"
      :author-image-url="message.author.imageUrl"
      :message="message.message"
      :direction="message.author.type == 'user' ? 'right' : 'left'"
      :time-created="message.timestamps.created"
    />
  </div>
</template>