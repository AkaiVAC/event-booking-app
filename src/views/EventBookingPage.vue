<script setup lang="ts">
    import { onMounted, ref } from 'vue';
    import { useEventStore } from '@/stores/event';
    import { useRouter } from 'vue-router';
    import { RouteEnum } from '@/../types/enums';
    import { App_Button, App_Image, App_Input } from '@/components/base';
    import { formatDateUtil } from '@/utils';
    import { App_Page } from '@/components/lib';

    const eventStore = useEventStore();
    const event = ref<EventInfo>();
    const submitted = ref(false);

    onMounted(() => {
        if (!eventStore.selectedEvent) {
            useRouter().replace(RouteEnum.Event_List_Page);
        }
        event.value = eventStore.getSelectedEvent;
    });
</script>
<template>
    <App_Page v-if="event" class="form__container">
        <h1 class="form__title">{{ event.name }}</h1>
        <p class="form__subtitle">
            {{ formatDateUtil(event.date) }} <br />
            Tickets Available: <span>{{ event.ticketCount }}</span>
        </p>

        <hr class="form__separator" />

        <div class="form__section">
            <div class="form__image">
                <App_Image :image="event.image" />
            </div>

            <form class="form__group" novalidate>
                <label for="name" class="form__field">
                    Name
                    <App_Input
                        class="form__input"
                        name="name"
                        placeholder="First Name Last Name"
                        @on-input="(val) => (eventStore.formData.name = val)"
                        required
                    />
                    <p
                        v-if="submitted && eventStore.getNameValidation"
                        class="form__error"
                    >
                        {{ eventStore.getNameValidation }}
                    </p>
                </label>
                <label for="email">
                    Email
                    <App_Input
                        class="form__input"
                        name="email"
                        type="email"
                        placeholder="username@domain.com"
                        @on-input="(val) => (eventStore.formData.email = val)"
                        required
                    />
                    <p
                        v-if="submitted && eventStore.getEmailValidation"
                        class="form__error"
                    >
                        {{ eventStore.getEmailValidation }}
                    </p>
                </label>
                <label for="seats">
                    No. of Seats
                    <select
                        name="seatCount"
                        v-model="eventStore.formData.seatCount"
                        @change="eventStore.formData.attendees = []"
                    >
                        <option
                            v-for="(_, i) of Array(6)"
                            :key="i"
                            :value="i + 1"
                            :selected="i === 0"
                        >
                            {{ i + 1 }}
                        </option>
                    </select>
                    <p
                        v-if="submitted && eventStore.getSeatCountValidation"
                        class="form__error"
                    >
                        {{ eventStore.getSeatCountValidation }}
                    </p>
                </label>

                <ul v-if="eventStore.formData.seatCount > 1">
                    <li
                        v-for="(_, i) of eventStore.formData.seatCount - 1"
                        :key="i"
                    >
                        <label :for="`attendee_${i + 2}`">
                            Name of Attendee #{{ i + 2 }}
                            <App_Input
                                :id="`#${i + 2}`"
                                type="text"
                                name="attendee"
                                @on-input="
                                    (val) =>
                                        (eventStore.formData.attendees[i] = val)
                                "
                                placeholder="First Name Last Name"
                            />
                            <p
                                v-if="
                                    submitted &&
                                    eventStore.getAttendeeValidation(i)
                                "
                                class="form__error"
                            >
                                {{ eventStore.getAttendeeValidation(i) }}
                            </p>
                        </label>
                    </li>
                </ul>

                <hr class="form__separator" />

                <div class="form__actions">
                    <App_Button
                        type="submit"
                        variant="secondary"
                        @on-click="
                            (e) => {
                                e.preventDefault();
                                submitted = true;
                                if (eventStore.getFormValidation) {
                                    return;
                                }

                                eventStore.ticketsBooked = true;
                                $router.replace(RouteEnum.Event_List_Page);
                            }
                        "
                    >
                        Submit
                    </App_Button>
                    <App_Button
                        type="reset"
                        variant="primary"
                        @on-click="
                            () => {
                                eventStore.$reset();
                                $router.replace(RouteEnum.Event_List_Page);
                            }
                        "
                    >
                        Cancel
                    </App_Button>
                </div>
            </form>
        </div>
    </App_Page>
</template>
<style lang="scss" scoped>
    .form__container {
        padding: 4rem $container-padding;
        .form__title {
            text-align: center;
            font-size: 1.5rem;
            font-weight: 700;
        }
        .form__subtitle {
            text-align: center;
            span {
                color: $color-primary;
                font-weight: 700;
            }
        }
    }

    .form__separator {
        margin-block: 1em 2em;
        border: unset;

        border-bottom: 0.125em solid $color-accent-light-2;
    }

    .form__section {
        display: grid;
        grid-template: 1fr / repeat(2, 1fr);
        grid-template-areas: 'image form';
        gap: 2rem;

        .form__image {
            grid-area: image;
            img {
                width: 100%;
                margin-top: 1.8em;
                border-radius: 0.25em;

                object-fit: cover;
                object-position: center;
            }
        }

        form {
            grid-area: form;
            display: flex;
            flex-direction: column;

            label {
                font-size: 1.1rem;
                display: flex;
                flex-direction: column;
                margin-bottom: 1em;

                select {
                    font-size: 1.1rem;
                    padding: 0.75em 1em;
                    border: 0.125em solid $color-accent-light-2;
                    border-radius: 0.25em;

                    color: $color-accent-dark;
                }

                .form__error {
                    color: $color-danger;
                    font-size: 0.9rem;
                }
            }

            ul {
                list-style: none;
                li > * {
                    width: -webkit-fill-available;
                }
            }

            .form__actions {
                width: 100%;
                display: flex;
                gap: 2rem;

                & > * {
                    padding-block: 1.7em;
                    flex: 1 1 100%;
                }
            }
        }
    }

    @media screen and (max-width: $breakpoint-tablet) {
        .form__section {
            grid-template: auto 1fr / 1fr;
            grid-template-areas: 'image' 'form';
        }
    }
</style>
