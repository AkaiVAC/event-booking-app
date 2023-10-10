<script setup lang="ts">
    import { App_Image } from '@/components/base';
    import type { IconEnum } from '@/../types/enums';

    export type ButtonProps = {
        variant: 'primary' | 'secondary' | 'icon';
        disabled?: boolean;
        icon?: IconEnum;
        autofocus?: boolean;
        type?: 'submit' | 'reset' | 'button';
    };

    withDefaults(defineProps<ButtonProps>(), {
        variant: 'primary',
        disabled: false,
        type: 'button',
    });

    defineEmits(['onClick']);
</script>
<template>
    <button
        class="btn"
        :type="type"
        :autofocus="autofocus"
        :disabled="disabled"
        :class="`btn--${variant}`"
        @click="(e) => $emit('onClick', e)"
    >
        <App_Image v-if="icon" class="btn__icon" :image="icon" />
        <p class="btn__text">
            <slot>Click</slot>
        </p>
    </button>
</template>
<style lang="scss">
    .btn {
        padding: 1.2em;
        background-color: transparent;

        border: 0.125em solid $color-primary;
        border-radius: 0.25em;

        display: flex;
        justify-content: center;
        align-items: center;
        cursor: pointer;

        .btn__icon {
            margin-right: 0.5em;
        }

        .btn__text {
            color: $color-primary;
            font-size: 1rem;
            font-weight: 700;
            line-height: 0;
        }

        &:disabled {
            border-color: $color-accent-light-2;
            pointer-events: none;

            .btn__text {
                color: $color-accent-dark;
                text-transform: uppercase;
            }
        }
    }

    .btn--secondary {
        background-color: $color-primary;
        .btn__text {
            color: $color-background;
        }
    }

    @media screen and (max-width: $breakpoint-tablet) {
        .btn--icon {
            padding: unset;
            border: unset;
            border-radius: unset;

            .btn__icon {
                width: 1.25rem;
                margin-right: unset;
            }

            .btn__text {
                display: none;
            }
        }
    }
</style>
