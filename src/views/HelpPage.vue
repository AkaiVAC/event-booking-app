<script setup lang="ts">
    import { App_Page } from '@/components/lib';
</script>
<template>
    <App_Page>
        <template #title>Help</template>
        <template #contents>
            <p>Follow these instructions to book a ticket to an event:</p>

            <ol>
                <li>Navigate to the Events page.</li>
                <li>
                    Click on the 'Book Event' button for the event you would
                    like to attend.
                </li>
                <li>Fill out the form and click on the submit button.</li>
            </ol>
        </template>
    </App_Page>
</template>
<style lang="scss" scoped>
    ol {
        margin-top: 1em;
        margin-left: 2em;
    }
</style>
