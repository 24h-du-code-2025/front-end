
import { computed, ref } from 'vue';

import { generateRandomToken } from "@/js/useful";
import { sendMessage, onMessage, closeSocket } from "@/composables/useWebsocket";

export const clientIsLoading = ref(false);
export const clientToken = ref(null);
export const clientMessages = ref([]);
export const activeQuestion = ref(null);
export const listenChatsCallbacks = ref([]);

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

        clientMessages.value = messages;

        setTimeout(() => {

            if (typeof callback === 'function') {

                callback(clientMessages.value);
            }

            listenChatsCallbacks.value.forEach((callback) => {

                callback(clientMessages.value);
            });
        }, 10);
    });
}

// export function listenQuestion(callback = null) {

//     onMessage('ask_question', (question) => {

//         activeQuestion.value = formatQuestion(question);

//         if (typeof callback === 'function') {

//             callback(activeQuestion.value);
//         }
//     });
// }

export function listenEnd(callback = null) {

    onMessage('end_session', () => {

        closeSocket();

        setTimeout(() => {

            clientToken.value = null;
            clientMessages.value = [];

            localStorage.removeItem('clientToken');
        }, 10);
    });
}

export function startClient() {

    clientIsLoading.value = true;

    getClientToken();
    listenChats();
    // listenQuestion();
    listenEnd();

    onMessage('connect', () => {

        clientIsLoading.value = false;
    });
}
export function catchChats(callback) {

    listenChatsCallbacks.value.push(callback);
}