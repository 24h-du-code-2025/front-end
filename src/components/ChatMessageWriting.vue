
<script setup>

  import base from "@/assets/moods/base.jpeg"

  const props = defineProps({
      message: {
          type: Object,
          default: () => ({})
      },
  });
</script>

<template>
<div class="chat chat-end animate-fade-in-right mt-2">
  <div class="chat-image avatar">
    <div class="w-10 rounded-full bg-gradient-to-r from-amber-400 to-orange-500 p-1 shadow-md transition-all duration-300 hover:scale-110 animate-pulse">
      <img alt="Hotel California chat" :src="base" class="rounded-full" />
    </div>
  </div>
  <div class="chat-bubble bg-gradient-to-br from-amber-400 to-orange-400 text-white shadow-sm relative overflow-hidden animate-fade-in transition-all duration-300 hover:shadow-lg h-10 flex">
    <div class='flex space-x-2 justify-center items-center dark:invert'>
      <span class='sr-only'>Loading...</span>
      <div class='h-2 w-2 bg-black rounded-full animate-bounce [animation-delay:-0.3s]'></div>
      <div class='h-2 w-2 bg-black rounded-full animate-bounce [animation-delay:-0.15s]'></div>
      <div class='h-2 w-2 bg-black rounded-full animate-bounce'></div>
    </div>
  </div>
</div>
</template>