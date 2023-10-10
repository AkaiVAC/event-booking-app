import { defineStore } from 'pinia';

export const useEventStore = defineStore({
    id: 'events',
    state: () => ({
        url: 'https://alvimurtaza.github.io/Interview-Front-end/images/l3-l4-engineer/',
        events: [] as Array<EventInfo>,
        searchTerm: '',
        selectedEvent: '' as EventInfo['id'],
        formData: {
            name: '',
            email: '',
            mobile: undefined,
            seatCount: 0,
            attendees: [],
        } as EventFormData,
        ticketsBooked: false,
    }),
    getters: {
        getSelectedEvent: (state): EventInfo | undefined =>
            state.events.find((event) => event.id === state.selectedEvent),
        getFilteredEvents: (state): Array<EventInfo> =>
            state.searchTerm !== ''
                ? state.events
                      .filter((event) =>
                          event.name
                              .toLowerCase()
                              .includes(state.searchTerm.toLowerCase())
                      )
                      .map((event) => ({
                          ...event,
                          name: event.name.replace(
                              new RegExp(state.searchTerm, 'igm'),
                              `<mark>$&</mark>`
                          ),
                      }))
                : state.events,
        getNameValidation: (state) => {
            if (!state.formData.name) {
                return 'Please enter your name';
            } else if (!/^[A-Za-z ]+$/.test(state.formData.name)) {
                return 'Only letters and spaces are allowed';
            } else {
                return '';
            }
        },
        getEmailValidation: (state) => {
            if (!state.formData.email) {
                return 'Please enter your email';
            } else if (
                !/([\w.\-_]+)?\w+@[\w-_]+(\.\w+){1,}/gim.test(
                    state.formData.email
                )
            ) {
                return 'Invalid email';
            } else {
                return '';
            }
        },
        getSeatCountValidation(state): string {
            if (!state.formData.seatCount) {
                return 'Please enter the number of seats';
            } else if (
                state.formData.seatCount >
                (this.getSelectedEvent?.ticketCount || 1)
            ) {
                return 'Number of seats selected is more than available seats';
            } else {
                return '';
            }
        },
        getAttendeeValidation: (state) => (attendeeId: number) => {
            if (!state.formData.attendees[attendeeId]) {
                return `Please enter the name of Attendee #${attendeeId + 2}`;
            } else if (
                !/^[A-Za-z ]+$/.test(state.formData.attendees[attendeeId])
            ) {
                return 'Only letters and spaces are allowed';
            } else {
                return '';
            }
        },
        getFormValidation(): boolean {
            return Boolean(
                this.getNameValidation ||
                    this.getEmailValidation ||
                    this.getSeatCountValidation ||
                    this.formData.seatCount - 1 !==
                        this.formData.attendees.length
            );
        },
        getSubmittedData(): string {
            const data = JSON.stringify(
                {
                    eventId: this.getSelectedEvent?.id,
                    eventName: this.getSelectedEvent?.name,
                    eventDate: this.getSelectedEvent?.date,

                    ...this.formData,
                },
                null,
                2
            ).trim();
            console.log(data);
            return data;
        },
    },
    actions: {
        async GET_EVENTS() {
            this.$state.events = [
                {
                    id: '1',
                    date: new Date('21 Sept 2020'),
                    image: 'event-1',
                    name: 'Understanding color theory: the color wheel and finding the right balance',
                    ticketCount: 0,
                },
                {
                    id: '2',
                    date: new Date('21 Sept 2020'),
                    image: 'event-2',
                    name: 'RGD Design Thinkers',
                    ticketCount: 1,
                },
                {
                    id: '3',
                    date: new Date('21 Sept 2020'),
                    image: 'event-3',
                    name: 'What Design Can Do',
                    ticketCount: 206,
                },
                {
                    id: '4',
                    date: new Date('21 Sept 2020'),
                    image: 'event-4',
                    name: 'Perth UX Camp',
                    ticketCount: 47,
                },
                {
                    id: '5',
                    date: new Date('21 Sept 2020'),
                    image: 'event-5',
                    name: 'Sofia Design',
                    ticketCount: 66,
                },
                {
                    id: '6',
                    date: new Date('21 Sept 2020'),
                    image: 'event-6',
                    name: 'Design Indaba Conference',
                    ticketCount: 84,
                },
                {
                    id: '7',
                    date: new Date('21 Sept 2020'),
                    image: 'event-7',
                    name: 'TYPO Berlin',
                    ticketCount: 4,
                },
                {
                    id: '8',
                    date: new Date('21 Sept 2020'),
                    image: 'event-8',
                    name: 'AIGA Design Conference',
                    ticketCount: 16,
                },
            ];
        },
    },
});
