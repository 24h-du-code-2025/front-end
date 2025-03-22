
<script setup>

    import { computed } from 'vue';

    const props = defineProps({
        message: {
            type: String,
            default: ''
        },
        timeCreated: {
            type: String,
            default: ''
        },
        authorName: {
            type: String,
            default: ''
        },
        authorImageUrl: {
            type: String,
            default: ''
        },
        direction:  {
            type: String,
            default: 'left'
        }
    });

    const created = computed(() => new Date(props.timeCreated));
    const createdHour = computed(() => created.value.getHours() + ':' + created.value.getMinutes());
</script>

<template>
<div class="chat chat-start" v-if="direction == 'left'">
  <div class="chat-image avatar">
    <div class="w-10 rounded-full bg-gradient-to-r from-indigo-400 to-cyan-300 p-1 shadow-md">
      <img alt="Hotel California chat" :src="authorImageUrl" class="rounded-full" />
    </div>
  </div>
  <div class="chat-header text-gray-800 font-medium">
    {{ authorName }}
    <time class="text-xs opacity-70 text-gray-600">{{ createdHour }}</time>
  </div>
  <div class="chat-bubble bg-gradient-to-r from-indigo-50 to-cyan-50 text-gray-700 shadow-sm relative overflow-hidden">
    <div class="absolute -bottom-6 -left-6 w-12 h-12 bg-indigo-200 rounded-full opacity-20"></div>
    {{ message }}
  </div>
</div>

<div class="chat chat-end" v-else-if="direction == 'right'">
  <div class="chat-image avatar">
    <div class="w-10 rounded-full bg-gradient-to-r from-amber-400 to-orange-500 p-1 shadow-md">
      <img alt="Hotel California chat" :src="authorImageUrl" class="rounded-full" />
    </div>
  </div>
  <div class="chat-header text-gray-800 font-medium">
    {{ authorName }}
    <time class="text-xs opacity-70 text-gray-600">{{ createdHour }}</time>
  </div>
  <div class="chat-bubble bg-gradient-to-br from-amber-400 to-orange-400 text-white shadow-sm relative overflow-hidden">
    {{ message }}
  </div>
</div>
</template>