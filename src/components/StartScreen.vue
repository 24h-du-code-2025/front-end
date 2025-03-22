
<script setup>

    import { startClient, clientIsLoading } from '@/composables/useClient';

    const props = defineProps({
        messages: Array
    })
</script>

<template>
    <div class="min-h-screen flex items-center justify-center p-4">
        <div class="bg-white rounded-xl shadow-2xl p-8 max-w-md w-full relative overflow-hidden">
            <!-- Éléments décoratifs -->
            <div class="absolute -top-10 -right-10 w-40 h-40 bg-yellow-300 rounded-full opacity-20"></div>
            <div class="absolute -bottom-10 -left-10 w-32 h-32 bg-pink-400 rounded-full opacity-20"></div>

            <!-- Logo et en-tête -->
            <div class="flex justify-center mb-6">
            <div class="rounded-full bg-gradient-to-r from-blue-400 to-teal-300 p-3 shadow-lg floating">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-12 w-12 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6"/>
                <circle cx="12" cy="12" r="8" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"/>
                </svg>
            </div>
            </div>

            <!-- Titre et description -->
            <h1 class="text-3xl font-bold text-center text-gray-800 mb-2">Bienvenue à l'Hotel California</h1>
            <p class="text-center text-gray-600 mb-8">Votre concierge disponible 24/7 pour rendre votre séjour inoubliable</p>

            <!-- Bouton principal -->
            <div class="flex justify-center mb-6" v-if="!clientIsLoading">
                <button class="bg-gradient-to-r from-pink-500 to-purple-500 hover:from-pink-600 hover:to-purple-600 text-white font-bold py-4 px-8 rounded-full shadow-lg transform transition duration-300 hover:scale-105 pulse-slow cursor-pointer">
                    <div class="flex items-center space-x-2">
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z"/>
                    </svg>
                    <span class="text-xl" @click="startClient">Commencer</span>
                    </div>
                </button>
            </div>
            <div class="flex justify-center mb-6" v-else>
                <button class="bg-gradient-to-r from-pink-500 to-purple-500 hover:from-pink-600 hover:to-purple-600 text-white font-bold py-4 px-8 rounded-full shadow-lg transform transition duration-300 hover:scale-105 pulse-slow cursor-wait" disabled>
                    <div class="flex items-center space-x-2">
                        <svg class="animate-spin h-6 w-6 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                            <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
                            <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                        </svg>
                        <span class="text-xl">Chargement...</span>
                    </div>
                </button>
            </div>

            <!-- Fonctionnalités avec icônes -->
            <div class="grid grid-cols-3 gap-2 mb-4">
            <div class="bg-blue-50 p-2 rounded-lg text-center">
                <div class="flex justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"/>
                </svg>
                </div>
                <p class="text-xs font-medium text-gray-700 mt-1">Réservations</p>
            </div>
            <div class="bg-green-50 p-2 rounded-lg text-center">
                <div class="flex justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"/>
                </svg>
                </div>
                <p class="text-xs font-medium text-gray-700 mt-1">Services</p>
            </div>
            <div class="bg-orange-50 p-2 rounded-lg text-center">
                <div class="flex justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-orange-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"/>
                </svg>
                </div>
                <p class="text-xs font-medium text-gray-700 mt-1">Paiements</p>
            </div>
            </div>

            <!-- Texte de bas de page -->
            <p class="text-center text-gray-500 text-xs">Disponible en français, anglais et espagnol</p>

        </div>
    </div>
</template>