<script setup lang="ts">
    import type { type } from 'os';

    defineProps<{
        message: string;
        type: 'success' | 'danger' | 'warning';
    }>();
</script>
<template>
    <div class="alert" :class="`alert--${type}`">
        {{ message }}
    </div>
</template>
<style lang="scss" scoped>
    .alert {
        font-size: 1.2em;
        text-align: center;
        width: 100%;
        padding: 0.5em 1em;
    }
    .alert--success {
        color: $color-background;
        background-color: $color-success;
    }
    .alert--danger {
        color: $color-background;
        background-color: $color-danger;
    }
    .alert--warning {
        background-color: $color-warning;
    }
</style>
