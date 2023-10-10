<script setup lang="ts">
    import { IconEnum, RouteEnum } from '@/../types/enums';
    import { useEventStore } from '@/stores/event';
    import formatDateUtil from '@/utils/formatDateUtil';
    import { App_Image } from '../base';
    import App_Button from '../base/App_Button.vue';

    defineProps<{
        event: EventInfo;
    }>();
</script>

<template>
    <div class="card">
        <div class="card__img-container">
            <App_Image
                class="card__img"
                :image="event.image"
                :alt="event.name"
            />
        </div>
        <div class="card__contents">
            <h2
                v-html="event.name"
                class="card__title"
                :title="event.name"
            ></h2>
            <div class="card__info">
                <div class="card__date">
                    {{ formatDateUtil(event.date) }}
                </div>
                <div class="card__tickets">
                    Tickets Available:
                    <span
                        class="card__ticket-count"
                        :class="{
                            'card__ticket-count--empty': !event.ticketCount,
                        }"
                    >
                        {{ event.ticketCount ? event.ticketCount : 'N/A' }}
                    </span>
                </div>
            </div>
            <App_Button
                class="card__action"
                :disabled="!event.ticketCount"
                variant="icon"
                :icon="
                    event.ticketCount
                        ? IconEnum.CALENDAR
                        : IconEnum.CALENDAR_GREY
                "
                @click="
                    () => {
                        useEventStore().selectedEvent = event.id;
                        useEventStore().formData = { name: '', email:'', seatCount: 0, attendees: [] } as EventFormData;
                        $router.push(RouteEnum.Event_Booking_Page);
                    }
                "
            >
                {{ event.ticketCount ? 'Book Event' : 'Sold Out' }}
            </App_Button>
        </div>
    </div>
</template>
<style lang="scss" scoped>
    .card {
        max-width: 23.25rem;
        box-sizing: content-box;

        border: 0.125em solid $color-accent-light-2;
        border-radius: 0.25em;

        .card__img-container {
            min-width: 23.3rem;
            min-height: 11.1rem;
            .card__img {
                width: 100%;
                border-top-left-radius: 0.25em;
                border-top-right-radius: 0.25em;
                transform: scale(1.01) translateY(-1px);
            }
        }

        .card__contents {
            padding: 1.5em;
            display: flex;
            flex-direction: column;

            gap: 1.5rem;

            .card__title {
                height: 3.375rem;
                font-size: 1.5rem;
                font-weight: 700;
                line-height: 1.6875rem;
                overflow: hidden;
                text-overflow: ellipsis;
                display: -webkit-box;
                -webkit-line-clamp: 2;
                -webkit-box-orient: vertical;
            }

            .card__info {
                font-weight: 400;

                display: flex;
                justify-content: space-between;
                flex-wrap: wrap;

                .card__ticket-count {
                    color: $color-primary;
                    font-weight: 700;
                }

                .card__ticket-count--empty {
                    color: $color-text;
                    font-weight: 400;
                }
            }
        }
    }

    @media screen and (max-width: $breakpoint-tablet) {
        .card {
            min-width: 80vw;
            max-width: unset;
            display: grid;
            grid-template: 1fr / 9rem auto;

            .card__img-container {
                min-width: unset;
                min-height: unset;
                width: 8rem;
                height: 8rem;
                margin: 1em;
                .card__img {
                    width: 100%;
                    height: 100%;
                    object-fit: cover;
                }
            }

            .card__contents {
                padding: 1em;
                display: grid;
                grid-template: repeat(2, 1fr) / 25fr 4fr;
                gap: unset;
                .card__title {
                    font-size: 1.25rem;
                }

                .card__info {
                    grid-row: 2 / 3;
                    grid-column: 1 / 2;

                    flex-direction: column;
                }

                .card__action {
                    grid-row: 1 / 3;
                    grid-column: 2 / 3;
                }
            }
        }
    }

    @media screen and (max-width: $breakpoint-mobile) {
        .card {
            border: unset;
            border-bottom: 0.125em solid $color-accent-light-1;

            grid-template: 1fr / auto;
            gap: unset;
            .card__img-container {
                display: none;
            }

            .card__contents {
                padding-inline: unset;
                column-gap: 1rem;
                .card__title {
                    font-size: 1.125rem;
                    -webkit-line-clamp: 1;
                }

                .card__info {
                    font-size: 1.125rem;
                }
            }
        }
    }
</style>
