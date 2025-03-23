
<script setup>

    import { ref } from 'vue';


  import base from "@/assets/moods/base.jpeg"
  import cook from "@/assets/moods/cook.jpeg"
  import idea from "@/assets/moods/idea.jpeg"
  import meteo from "@/assets/moods/meteo.jpeg"
  import spa from "@/assets/moods/spa.jpeg"
  import thinking from "@/assets/moods/thinking.jpeg"
  import tourism from "@/assets/moods/tourism.jpeg"
  import note from "@/assets/moods/note.jpeg"
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


const currentMood = ref("base")

    const emit = defineEmits(['send']);
    const message = ref('');

    function sendMessage() {

        if (message.value !== '') {

            emit('send', message.value);

            message.value = '';
        }
    }


listenMood(mood => currentMood.value = mood)
</script>

<template>
    <div class="flex justify-center items-center relative z-10">
        <div class="">
            <img class="bot-avatar w-20" :src="moods[currentMood]">
        </div>
        <div class="flex-1 relative overflow-hidden">
            <input
                type="text"
                placeholder="Discuter avec Doggy ..."
                class="input w-full py-4 px-6 bg-white shadow-md focus:outline-none text-gray-700 h-20 text-xl rounded-none border-none"
                v-model="message"
                v-on:keyup.enter="sendMessage"
            />
        </div>
        <button
            class="inline-flex items-center justify-center cursor-pointer rounded-r-full bg-gradient-to-r from-pink-500 to-purple-500 p-4 text-center text-white shadow-lg transform transition duration-300 hover:scale-105 hover:from-pink-600 hover:to-purple-600 h-20 w-20"
            @click="sendMessage()"
        >
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
                <path stroke-linecap="round" stroke-linejoin="round" d="M6 12 3.269 3.125A59.769 59.769 0 0 1 21.485 12 59.768 59.768 0 0 1 3.27 20.875L5.999 12Zm0 0h7.5" />
            </svg>
        </button>
    </div>
</template>

<style scoped>

.bot-avatar {

  object-fit: cover;
}
</style>