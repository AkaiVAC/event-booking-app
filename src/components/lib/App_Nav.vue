<script setup lang="ts">
    import { IconEnum } from '@/../types/enums';
    import { App_Image } from '../base';
    import { onMounted, onUnmounted, ref } from 'vue';
    defineProps<{
        routes: Array<Record<'path' | 'name', string>>;
    }>();

    const menuOpen = ref(false);
    const nav__list = ref<HTMLElement>();
    const resizeObserver = new ResizeObserver(() => {
        menuOpen.value = false;
        nav__list.value && nav__list.value.classList.remove('open');
    });

    onMounted(() => {
        resizeObserver.observe(document.body);
    });

    onUnmounted(() => {
        resizeObserver.unobserve(document.body);
    });

    const toggleNavList = () => {
        menuOpen.value = !menuOpen.value;
        nav__list.value && nav__list.value.classList.toggle('open');
    };
</script>
<template>
    <nav ref="nav" class="nav">
        <App_Image
            class="nav__image"
            :image="menuOpen ? IconEnum.CLOSE : IconEnum.MENU"
            @click="toggleNavList"
        />
        <ul ref="nav__list" class="nav__list">
            <li
                v-for="route of routes"
                :key="route.name"
                class="nav__list-item"
                :class="{
                    'nav__list-item--active': $route.path === route.path,
                }"
            >
                <RouterLink class="nav__link" :to="route.path">
                    {{ route.name }}
                </RouterLink>
            </li>
        </ul>
    </nav>
</template>
<style lang="scss" scoped>
    .nav {
        height: 100%;
        display: flex;

        .nav__list {
            list-style: none;
            display: flex;
            gap: 1.5rem;

            .nav__list-item {
                height: 100%;
                box-sizing: border-box;
                display: flex;
                align-items: center;
                opacity: 0.75;
            }

            .nav__link {
                color: $color-background;
                text-decoration: none;
                width: 100%;
                height: 100%;
                padding-inline: 0.5em;
                text-shadow: 0px 2px 2px rgba(0, 0, 0, 0.25);
                display: flex;
                align-items: center;
            }

            .nav__list-item--active {
                opacity: 1;

                &::after {
                    content: '';
                    height: 0.625em;
                    width: 100%;
                    position: absolute;
                    bottom: 0;
                    background-color: $color-accent-green;
                }
            }
        }

        .nav__image {
            display: none;
        }

        @media screen and (max-width: $breakpoint-tablet) {
            .nav__list {
                display: none;

                &.open {
                    display: flex;
                }

                flex-direction: column;
                justify-content: start;
                gap: 1.5rem;

                padding-inline: $container-padding;
                padding-top: 1rem;
                background-color: $color-secondary;

                position: fixed;
                inset: 0;
                top: 4rem;
                width: 100vw;
                height: 100vh;

                z-index: 1;

                .nav__list-item {
                    height: 4rem;
                    width: 100%;
                }

                .nav__list-item--active::after {
                    height: 0.3125rem;
                }
            }

            .nav__image {
                height: 1.5rem;
                width: 1.5rem;

                display: flex;
                align-self: center;
                cursor: pointer;
            }
        }
    }
</style>
