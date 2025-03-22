
<script setup>

import { marked } from 'marked';

const props = defineProps({
    message: {
        type: Object,
        default: () => ({})
    },
    direction: {
        type: String,
        default: "left"
    },
});

const parsedMessage = marked.parse(props.message.content);

</script>

<template>
  <div class="chat-bubble bg-gradient-to-r from-indigo-50 to-cyan-50 text-gray-700 shadow-sm relative overflow-hidden" v-if="direction == 'left'">
    <div class="absolute -bottom-6 -left-6 w-12 h-12 bg-indigo-200 rounded-full opacity-20"></div>
    <div v-html="parsedMessage"></div>
  </div>
  <div class="chat-bubble bg-gradient-to-br from-amber-400 to-orange-400 text-white shadow-sm relative overflow-hidden" v-else>
    <div v-html="parsedMessage"></div>
  </div>
</template>