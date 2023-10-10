<script setup lang="ts">
    import { App_Alert } from '@/components/base';
    import { App_Page, App_List, App_Search } from '@/components/lib';
    import { useEventStore } from '@/stores/event';
    import { onMounted } from 'vue';

    const eventStore = useEventStore();
    onMounted(async () => {
        if (!eventStore.events.length) {
            await eventStore.GET_EVENTS();
        }

        if (eventStore.selectedEvent) {
            eventStore.events.map((event) => {
                if (event.id === eventStore.selectedEvent) {
                    event.ticketCount -= eventStore.formData.seatCount;
                }
            });
        }
    });
</script>
<template>
    <template v-if="eventStore.ticketsBooked">
        <App_Alert message="Tickets booked" type="success" />
        <pre>{{ eventStore.getSubmittedData }}</pre>
    </template>
    <App_Search />
    <App_Page>
        <template #title>
            Events <span>({{ eventStore.getFilteredEvents.length }})</span>
        </template>
        <template #contents>
            <App_List :events="eventStore.getFilteredEvents" />
        </template>
    </App_Page>
</template>
<style lang="scss" scoped>
    pre {
        font-size: 0.9rem;
        padding: 1em;
        display: flex;
        justify-content: center;
        align-items: center;
    }
</style>
