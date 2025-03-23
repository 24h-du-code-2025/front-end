
<script setup>

  import { ref } from 'vue';

  import { listenMood } from '@/composables/useClient';

  import StartChats from '@/components/StartChats.vue';
  import ChatMessage from '@/components/ChatMessage.vue';
  import ChatMessageWriting from '@/components/ChatMessageWriting.vue';

  const mood = ref('base');

  const props = defineProps({
    messages: Array
  });

  listenMood((newMood) => {

    mood.value = newMood;

    if(mood.value == 'thinking') {

      setTimeout(() => {

        const chatMessages = document.querySelector('.chat-messages');

        chatMessages.scrollTop = chatMessages.scrollHeight;
      }, 10);
    }
  });

  // const messages = computed(() => props.messages.slice(props.messages.length - 2, props.messages.length));
</script>

<template>
  <div>
    <!-- <div class="flex justify-items-end" v-if="messages.length > 0">
      <span id="mode-label" class="mr-2 text-sm text-gray-600">Mode simple</span>
      <button id="toggle-mode" class="relative inline-flex items-center h-6 rounded-full w-11 bg-gray-300 transition-colors duration-300 ease-in-out">
        <span id="toggle-circle" class="inline-block w-5 h-5 transform translate-x-1 bg-white rounded-full transition-transform duration-300 ease-in-out shadow-md"></span>
      </button>
    </div> -->

    <StartChats v-if="messages.length <= 0" />
    <ChatMessage v-for="message in messages" :message="message" :direction="message.from == 'user' ? 'right' : 'left'" v-else />
    <ChatMessageWriting v-if="mood == 'thinking'"/>
  </div>
</template>

<style scoped>
</style>