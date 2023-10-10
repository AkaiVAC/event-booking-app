import { describe, expect, beforeAll, it, afterEach, vi } from 'vitest';
import { setActivePinia, createPinia } from 'pinia';
import { useEventStore } from '@/stores/event';
import { eventGenerator } from './utils/testDataGenerator';
import router from '@/router';

const events: Array<EventInfo> = await eventGenerator(8);

describe('Event Store', () => {
    beforeAll(() => {
        setActivePinia(createPinia());
        router.replace = vi.fn();
    });

    describe('Getters', () => {
        describe('getSelectedEvent', () => {
            it('gets the user selected event', () => {
                const eventStore = useEventStore();
                eventStore.$patch({
                    events,
                    selectedEvent: events[0].id,
                });

                const result = eventStore.getSelectedEvent;

                expect(result).toStrictEqual(events[0]);
            });
        });
    });
});

afterEach(() => {
    vi.clearAllMocks();
});
