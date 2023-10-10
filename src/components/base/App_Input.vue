<script setup lang="ts">
    import { ref } from 'vue';

    defineEmits(['onInput']);
    defineProps<{
        type?:
            | 'text'
            | 'email'
            | 'radio'
            | 'checkbox'
            | 'number'
            | 'tel'
            | 'hidden';
        name: string;
        placeholder?: string;
    }>();
    const input = ref();
    defineExpose({
        input,
    });
</script>
<template>
    <input
        ref="input"
        class="app-input"
        :name="name"
        :type="type || 'text'"
        @input="(e:Event) => $emit('onInput', (e.target as HTMLInputElement).value)"
        :placeholder="placeholder"
    />
</template>

<style lang="scss" scoped>
    .app-input {
        font-size: 1rem;
        padding: 0.75em 1em;
        border: 0.125em solid $color-accent-light-2;
        border-radius: 0.25em;

        ::placeholder {
            color: $color-accent-dark;
        }
    }
</style>
