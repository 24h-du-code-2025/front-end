
<script setup>

    import { ref } from 'vue';

    const emit = defineEmits(['send']);
    const message = ref('');

    function sendMessage() {

        if (message.value !== '') {

            emit('send', message.value);

            message.value = '';
        }
    }
</script>

<template>
    <div class="flex justify-center items-center gap-4 relative z-10">
        <div class="flex-1 relative overflow-hidden">
            <input
                type="text"
                placeholder="Discuter avec l'agent ..."
                class="input w-full py-4 px-6 rounded-full bg-white border border-gray-200 shadow-md focus:outline-none focus:ring-2 focus:ring-blue-300 text-gray-700"
                v-model="message"
                v-on:keyup.enter="sendMessage"
            />
        </div>
        <button
            class="inline-flex items-center justify-center cursor-pointer rounded-full bg-gradient-to-r from-pink-500 to-purple-500 p-4 text-center text-white shadow-lg transform transition duration-300 hover:scale-105 hover:from-pink-600 hover:to-purple-600"
            @click="sendMessage()"
        >
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
                <path stroke-linecap="round" stroke-linejoin="round" d="M6 12 3.269 3.125A59.769 59.769 0 0 1 21.485 12 59.768 59.768 0 0 1 3.27 20.875L5.999 12Zm0 0h7.5" />
            </svg>
        </button>
    </div>
</template>