<script setup>

  import { ref } from 'vue'

  import { isLogged, sendChat, getClientMessages, catchChats } from '@/composables/useClient';

  import ChatBar from '@/components/ChatBar.vue';
  import ChatMessages from '@/components/ChatMessages.vue';
  import StartScreen from '@/components/StartScreen.vue';

  const value = ref('');

  catchChats(() => {

    const chatMessages = document.querySelector('.chat-messages');

    chatMessages.scrollTop = chatMessages.scrollHeight;
  });
</script>

<template>

  <div class="flex flex-col bg-gradient-to-br from-gray-100 to-indigo-100">

    <StartScreen v-if="!isLogged" />
    <template v-if="isLogged">
      <ChatMessages :messages="getClientMessages()" class="chat-messages" />
      <ChatBar @send="(message) => sendChat(message)" class="chat-bar" />
    </template>
  </div>

</template>

<style scoped>

  .chat-messages {

    height: calc(100vh - (56px + 2rem));
    padding: 2rem 2rem 0 2rem;
    overflow-y: auto;
  }

  .chat-bar {

    padding: 1rem;
  }
</style>
