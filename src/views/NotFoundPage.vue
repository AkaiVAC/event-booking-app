<script setup lang="ts">
    import { App_Page } from '@/components/lib';
</script>

<template>
    <App_Page>
        <template #title>404 </template>
        <template #contents>
            `{{ $route.params.pathMatch[0] }}` Page Not Found
        </template>
    </App_Page>
</template>
