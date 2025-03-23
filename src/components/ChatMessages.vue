
<script setup>

  // import { computed } from 'vue';

  import StartChats from '@/components/StartChats.vue';
  import ChatMessage from '@/components/ChatMessage.vue';


  import base from "@/assets/moods/base.jpeg"
  import cook from "@/assets/moods/cook.jpeg"
  import idea from "@/assets/moods/idea.jpeg"
  import meteo from "@/assets/moods/meteo.jpeg"
  import spa from "@/assets/moods/spa.jpeg"
  import thinking from "@/assets/moods/thinking.jpeg"
  import tourism from "@/assets/moods/tourism.jpeg"
  import note from "@/assets/moods/note.jpeg"
  import {ref} from "vue";
  import {listenMood} from "@/composables/useClient.js";

  const moods = {
    note,
    base,
    cook,
    idea,
    meteo,
    spa,
    thinking,
    tourism
  }


  const props = defineProps({
    messages: Array
  });


  const currentMood = ref("base")


  listenMood(mood => currentMood.value = mood)

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
    <img class="bot-avatar" :src="moods[currentMood]" alt="" v-if="messages.length > 0">

    <StartChats v-if="messages.length <= 0" />
    <ChatMessage v-for="message in messages" :message="message" :direction="message.from == 'user' ? 'right' : 'left'" v-else />
  </div>
</template>

<style scoped>
.bot-avatar{
  width: 100px;
  height: 100px;
  object-fit: cover;
  position: fixed;
  left: 0;
  top: 0;
  z-index: 1000;
}
</style>