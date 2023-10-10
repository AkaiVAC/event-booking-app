<script setup lang="ts">
    import { IconEnum, RouteEnum } from '@/../types/enums';
    import { App_Nav } from '.';
    import { App_Image } from '../base';

    const navRoutes = [
        {
            path: RouteEnum.Dashboard_Page,
            name: 'Dashboard',
        },
        {
            path: RouteEnum.Event_List_Page,
            name: 'Events',
        },
        {
            path: RouteEnum.Help_Page,
            name: 'Help',
        },
        {
            path: '#',
            name: 'Logout',
        },
    ];
</script>

<template>
    <header class="header">
        <App_Image class="header__logo" :image="IconEnum.LOGO" />
        <App_Nav class="header__nav" :routes="navRoutes" />
    </header>
</template>
<style lang="scss" scoped>
    .header {
        height: 6.25rem;
        padding-inline: $container-padding;
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        align-items: center;
        background-color: $color-secondary;

        .header__logo {
            width: 15rem;
        }
    }

    @media screen and (max-width: $breakpoint-tablet) {
        .header {
            height: 4rem;
            .header__logo {
                width: 10rem;
            }
        }
    }

    @media screen and (max-width: $breakpoint-mobile) {
        .header {
            box-shadow: 0 2px 2px rgba($color: #000000, $alpha: 0.75);
        }
    }
</style>
