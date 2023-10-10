<script setup lang="ts">
    import { App_Image, App_Input } from '@/components/base';
    import { IconEnum } from '@/../types/enums';
    import { useEventStore } from '@/stores/event';
</script>
;
<template>
    <div class="search">
        <div class="search__input-container">
            <App_Input
                name="search"
                class="search__input"
                placeholder="Search By Event Title ..."
                @on-input="(value: string) => (useEventStore().searchTerm = value)"
            />
            <App_Image class="search__icon" :image="IconEnum.SEARCH" />
        </div>
    </div>
</template>

<style lang="scss" scoped>
    .search {
        height: 6.25rem;
        padding-inline: $container-padding;
        background-color: $color-accent-light-1;
        display: flex;
        align-items: center;

        .search__input-container {
            width: 100%;
            max-width: 35rem;
            display: grid;
            grid-template: 1fr / 1fr 2em;
            place-items: center;
            background-color: $color-background;
            border: 0.125em solid $color-accent-light-2;
            border-radius: 0.25em;

            .search__input {
                width: 100%;
                max-width: 35rem;
                border: unset;
            }
        }
    }

    @media screen and (max-width: $breakpoint-tablet) {
        .search {
            height: 5.125rem;

            .search__input-container {
                max-width: unset;
            }
        }
    }
</style>
