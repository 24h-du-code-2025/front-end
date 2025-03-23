
<script setup>

    import { sendChat } from '@/composables/useClient';

    const props = defineProps({
        messages: Array
    })
</script>

<template>
    <div class="max-w-4xl mx-auto pb-4">
    <!-- En-tête avec logo -->
    <div class="flex items-center justify-between mb-8">
      <div class="flex items-center space-x-3">
        <div class="bg-gradient-to-r from-blue-500 to-purple-500 rounded-full p-2 shadow-md">
          <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6"/>
            <circle cx="12" cy="12" r="8" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"/>
          </svg>
        </div>
        <h1 class="text-2xl font-bold text-gray-800">Hotel California</h1>
      </div>
      <!-- <div class="flex space-x-2">
        <button class="text-gray-500 hover:text-gray-700 p-2 rounded-full hover:bg-gray-100 transition">
          <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
          </svg>
        </button>
        <button class="text-gray-500 hover:text-gray-700 p-2 rounded-full hover:bg-gray-100 transition">
          <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
          </svg>
        </button>
      </div> -->
    </div>

    <!-- Message de bienvenue -->
    <div class="bg-white rounded-xl shadow-sm p-6 mb-8">
      <h2 class="text-xl font-semibold text-gray-800 mb-2">Bonjour, que souhaitez-vous découvrir aujourd'hui ?</h2>
      <p class="text-gray-600">Sélectionnez une action ou recherchez des informations spécifiques.</p>
    </div>

    <!-- Grille des actions principales -->
    <div class="grid grid-cols-2 md:grid-cols-3 gap-4 mb-8">

        <!-- Information sur le Restaurant -->
        <div class="bg-white rounded-xl shadow-sm overflow-hidden hover:shadow-md transition hover-bounce">
            <button class="w-full h-full p-6 text-left cursor-pointer" @click="sendChat('Quels sont les restaurants à proximité ?')">
            <div class="flex flex-col items-center">
                <div class="rounded-full bg-orange-100 p-4 mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8 text-orange-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                </svg>
                </div>
                <h3 class="font-bold text-gray-800 text-lg mb-1">Restaurant</h3>
                <p class="text-gray-500 text-sm text-center">Menu et horaires</p>
            </div>
            </button>
        </div>

        <!-- Information sur les Repas -->
        <div class="bg-white rounded-xl shadow-sm overflow-hidden hover:shadow-md transition hover-bounce">
            <button class="w-full h-full p-6 text-left cursor-pointer" @click="sendChat('Quels sont les types repas disponibles ?')">
            <div class="flex flex-col items-center">
                <div class="rounded-full bg-red-100 p-4 mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8 text-red-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
                </div>
                <h3 class="font-bold text-gray-800 text-lg mb-1">Repas</h3>
                <p class="text-gray-500 text-sm text-center">Service en chambre</p>
            </div>
            </button>
        </div>

        <!-- Information sur la Réservation -->
        <div class="bg-white rounded-xl shadow-sm overflow-hidden hover:shadow-md transition hover-bounce">
            <button class="w-full h-full p-6 text-left cursor-pointer" @click="sendChat('Je souhaiterais réserver une chambre')">
            <div class="flex flex-col items-center">
                <div class="rounded-full bg-blue-100 p-4 mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
                </div>
                <h3 class="font-bold text-gray-800 text-lg mb-1">Réservation</h3>
                <p class="text-gray-500 text-sm text-center">Détails du séjour</p>
            </div>
            </button>
        </div>

        <!-- Information sur le Client -->
        <div class="bg-white rounded-xl shadow-sm overflow-hidden hover:shadow-md transition hover-bounce">
            <button class="w-full h-full p-6 text-left cursor-pointer" @click="sendChat('Je voudrais accéder à mon profil')">
                <div class="flex flex-col items-center">
                <div class="rounded-full bg-purple-100 p-4 mb-4">
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8 text-purple-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                    </svg>
                </div>
                <h3 class="font-bold text-gray-800 text-lg mb-1">Mon profil</h3>
                <p class="text-gray-500 text-sm text-center">S'identifier</p>
                </div>
            </button>
        </div>

        <!-- Information sur les Spas -->
        <div class="bg-white rounded-xl shadow-sm overflow-hidden hover:shadow-md transition hover-bounce">
            <button class="w-full h-full p-6 text-left cursor-pointer" @click="sendChat('Je voudrais connaitre les spas à proximité')">
                <div class="flex flex-col items-center">
                <div class="rounded-full bg-teal-100 p-4 mb-4">
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8 text-teal-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                </div>
                <h3 class="font-bold text-gray-800 text-lg mb-1">Spas</h3>
                <p class="text-gray-500 text-sm text-center">Bien-être à proximité</p>
                </div>
            </button>
        </div>

        <!-- Nouvelles locales -->
        <div class="bg-white rounded-xl shadow-sm overflow-hidden hover:shadow-md transition hover-bounce">
            <button class="w-full h-full p-6 text-left cursor-pointer" @click="sendChat('Quelles sont les nouvelles locales ?')">
                <div class="flex flex-col items-center">
                <div class="rounded-full bg-green-100 p-4 mb-4">
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z" />
                    </svg>
                </div>
                <h3 class="font-bold text-gray-800 text-lg mb-1">News</h3>
                <p class="text-gray-500 text-sm text-center">Actualités locales</p>
                </div>
            </button>
        </div>
    </div>

    <!-- Bouton de chat -->
    <div class="bg-white rounded-xl shadow-sm p-6 text-center">
      <p class="text-gray-700 mb-4">Vous ne trouvez pas ce que vous cherchez ?</p>
      <button class="bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600 text-white font-medium py-3 px-6 rounded-full shadow-sm transition transform hover:scale-105 cursor-pointer" @click="sendChat('J\'ai besoin d\'aide !')">
        <div class="flex items-center justify-center space-x-2">
          <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 12h.01M12 12h.01M16 12h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
          </svg>
          <span>Discuter avec l'assistant</span>
        </div>
      </button>
    </div>
  </div>
</template>

<style scoped>

  @keyframes bounce-light {
    0%, 100% { transform: translateY(0); }
    50% { transform: translateY(-5px); }
  }
  .hover-bounce:hover {
    animation: bounce-light 0.8s ease infinite;
  }
  .bg-pattern {
    background-image: url("data:image/svg+xml,%3Csvg width='20' height='20' viewBox='0 0 20 20' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%239C92AC' fill-opacity='0.05' fill-rule='evenodd'%3E%3Ccircle cx='3' cy='3' r='3'/%3E%3Ccircle cx='13' cy='13' r='3'/%3E%3C/g%3E%3C/svg%3E");
  }
</style>