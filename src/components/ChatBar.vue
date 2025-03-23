
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
    import {startRecording, stopRecording} from "@/js/app.js";

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


listenMood(mood => currentMood.value = mood);
const recording = ref(false)

function toggleRecord(){
  if(recording.value){
    stopRecording().then(raw => {
      try {
        const data = JSON.parse(raw)
        message.value = data.text
      } catch (e){
        console.log(e)
      }
    })
    recording.value = false
  } else {
    startRecording()
    recording.value = true
  }
}
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
        <button @click="toggleRecord" class="inline-flex items-center justify-center cursor-pointer bg-red-400 p-4 text-center text-white shadow-lg h-20 w-15">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6" v-if="!recording">
            <path stroke-linecap="round" stroke-linejoin="round" d="M12 18.75a6 6 0 0 0 6-6v-1.5m-6 7.5a6 6 0 0 1-6-6v-1.5m6 7.5v3.75m-3.75 0h7.5M12 15.75a3 3 0 0 1-3-3V4.5a3 3 0 1 1 6 0v8.25a3 3 0 0 1-3 3Z" />
          </svg>
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6 animate-spin" v-else>
            <path stroke-linecap="round" stroke-linejoin="round" d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0 3.181 3.183a8.25 8.25 0 0 0 13.803-3.7M4.031 9.865a8.25 8.25 0 0 1 13.803-3.7l3.181 3.182m0-4.991v4.99" />
          </svg>
        </button>
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