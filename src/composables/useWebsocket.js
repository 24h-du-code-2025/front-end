
import { io } from "socket.io-client";
import { getClientToken } from "@/composables/useClient";

export let socket = null;

export function initSocket() {

    if(!socket) {

        socket = io("http://192.168.5.1:5000", {
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