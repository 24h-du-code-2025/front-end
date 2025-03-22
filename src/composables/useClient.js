
import { computed, ref } from 'vue';

import { generateRandomToken, formatMessage } from "@/js/useful";
import { sendMessage, onMessage } from "@/composables/useWebsocket";

export const clientIsLoading = ref(false);
export const clientToken = ref(null);
export const clientMessages = ref([]);

export const isLogged = computed(() => clientToken.value !== null && clientIsLoading.value === false);

export function getClientToken() {

    let clientTokenStored = localStorage.getItem('clientToken');

    if (!clientTokenStored) {

        clientToken.value = generateRandomToken();

        localStorage.setItem('clientToken', clientToken.value);
    } else {

        clientToken.value = clientTokenStored;
    }

    return clientToken.value;
}

export function getClientMessages() {

    return clientMessages.value;
}

export function sendChat(message) {

    sendMessage('chat', {
        message: message
    });
}

export function listenChats(callback = null) {

    onMessage('update_history', (messages) => {

        clientMessages.value = messages.map((message) => formatMessage(message));

        if (typeof callback === 'function') {

            callback(clientMessages.value);
        }
    });
}

export function startClient() {

    clientIsLoading.value = true;

    getClientToken();
    listenChats();

    onMessage('connect', () => {

        clientIsLoading.value = false;
    });
}