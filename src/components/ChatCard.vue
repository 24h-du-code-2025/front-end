
<script setup>

import { computed } from 'vue';

import { sendChat } from '@/composables/useClient';

import MessageCard from '@/components/MessageCard.vue';
import SpaCard from '@/components/SpaCard.vue';
import SpaList from '@/components/SpaList.vue';
import EventsList from '@/components/EventsList.vue';
import BookingCard from '@/components/BookingCard.vue';
import ProposeIntents from '@/components/ProposeIntents.vue';
import WeatherCard from '@/components/WeatherCard.vue';

const cardTypes = {
    message: MessageCard,
    spa_details: SpaCard,
    spa_list: SpaList,
    events_list: EventsList,
    reservation_details: BookingCard,
    propose_intents: ProposeIntents,
    meteo: WeatherCard,
};

const props = defineProps({
    message: {
        type: Object,
        default: () => ({})
    },
    direction:  {
        type: String,
        default: 'left'
    }
});

const cardType = computed(() => cardTypes[props.message.type]);

function makeAction(data) {

    switch(props.message.type) {

        case 'spa_list':

            sendChat('Donne moi le détail du spa "' + data.name + '"');
        break;

        case 'propose_intents':

            sendChat(data.prompt);
        break;
    }
}

</script>

<template>
    <component
      :is="cardType"
      :message="message"
      :direction="direction"
      @click="makeAction"
      v-if="cardType"
    />
    <template v-else>{{ message }}</template>
</template>