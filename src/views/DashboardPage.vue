<script setup lang="ts">
    import { App_Page } from '@/components/lib';
    import { RouteEnum } from '@/../types/enums';
</script>
<template>
    <App_Page>
        <template #title> Welcome to the Event Booking App! </template>
        <template #contents>
            <p>
                Continue to the
                <RouterLink :to="RouteEnum.Event_List_Page">Events</RouterLink>
                page to book an event.
            </p>
        </template>
    </App_Page>
</template>
