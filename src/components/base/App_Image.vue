<script setup lang="ts">
    const imageUrl =
        'https://alvimurtaza.github.io/Interview-Front-end/images/l3-l4-engineer';

    defineProps<{
        image: string;
        width?: `${number}`;
        alt?: string;
    }>();
</script>
<template>
    <img
        v-if="image"
        class="app-icon"
        loading="lazy"
        :src="`${imageUrl}/${image}.png`"
        :alt="alt || `${image} image`"
        :width="width"
        crossorigin="anonymous"
    />
</template>
