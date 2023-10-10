<script setup lang="ts">
    import { App_Layout } from '@/components/layout';
    import { RouterView } from 'vue-router';
</script>

<template>
    <App_Layout>
        <RouterView />
    </App_Layout>
</template>

<style lang="scss">
    @import './assets/base.scss';
</style>
