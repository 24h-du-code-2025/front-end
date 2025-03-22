
import { io } from "socket.io-client";
import { getClientToken } from "@/composables/useClient";

export let socket = null;

export function initSocket() {

    if(!socket) {

        socket = io(import.meta.env.VITE_BACK_END_URL, {
            auth: {
                token: getClientToken(),
            },
        });

    }
}

export function closeSocket() {

    socket.close();
}

export function sendMessage(type, params = {}) {

    initSocket();

    socket.emit(type, params);
}

export function onMessage(type, callback) {

    initSocket();

    socket.on(type, callback)
}