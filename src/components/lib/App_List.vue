<script setup lang="ts">
    import App_Card from './App_Card.vue';

    defineProps<{
        events: Array<EventInfo>;
    }>();
</script>

<template>
    <ul v-if="events.length" class="list">
        <li class="list__item" v-for="event in events" :key="event.id">
            <App_Card :event="event" />
        </li>
    </ul>
    <p v-else>No results found!</p>
</template>

<style lang="scss" scoped>
    .list {
        list-style: none;

        display: flex;
        flex-wrap: wrap;
        gap: 2rem;
    }

    @media screen and (max-width: $breakpoint-tablet) {
        .list {
            gap: 1rem;
        }
    }

    @media screen and (max-width: $breakpoint-mobile) {
        .list {
            gap: unset;
            :last-of-type > .card {
                border: unset;
            }
        }
    }
</style>
