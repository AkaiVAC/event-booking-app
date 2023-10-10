declare global {
    type EventInfo = {
        id: string;
        name: string;
        image: string;
        date: Date;
        ticketCount: number;
    };

    type EventFormData = {
        name: string;
        email: string;
        seatCount: number;
        attendees: Array<string>;
    };

    declare module '*.vue' {
        import type { DefineComponent } from 'vue';
        const component: DefineComponent<
            Record<string, unknown>,
            Record<string, unknown>,
            unknown
        >;
        export default component;
    }
}

export {};
