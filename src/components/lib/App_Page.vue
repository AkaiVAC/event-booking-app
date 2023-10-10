<template>
    <main class="container">
        <slot />
        <h1 class="container__title" v-if="$slots['title']">
            <slot name="title" />
        </h1>
        <section class="container__contents">
            <slot name="contents" />
        </section>
    </main>
</template>
<style lang="scss" scoped>
    .container {
        padding: 4rem $container-padding;
        .container__title {
            font-size: 2.25rem;
            font-weight: 800;
            text-transform: uppercase;
            line-height: 2.5rem;
            margin-bottom: 1.5rem;

            span {
                font-weight: 300;
            }
        }

        .container__contents {
            display: flex;
            flex-direction: column;
            flex-wrap: wrap;
        }
    }

    @media screen and (max-width: $breakpoint-tablet) {
        .container {
            padding: 2.5rem $container-padding;
            .container__title {
                font-size: 1.5rem;
                line-height: 1.67rem;
                margin-bottom: 2rem;
            }
        }
    }
</style>
