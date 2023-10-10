import { createRouter, createWebHistory } from 'vue-router';
import type { RouteRecordRaw } from 'vue-router';
import {
    DashboardPage,
    EventListPage,
    EventBookingPage,
    HelpPage,
    ConfirmationPage,
    NotFoundPage,
} from '@/views';
import { RouteEnum } from '@/../types/enums';

export const routes: Array<RouteRecordRaw> = [
    {
        path: RouteEnum.Dashboard_Page,
        name: 'Dashboard',
        component: DashboardPage,
    },
    {
        path: RouteEnum.Event_List_Page,
        name: 'Events',
        component: EventListPage,
    },
    {
        path: RouteEnum.Event_Booking_Page,
        name: 'BookEvent',
        component: EventBookingPage,
    },
    {
        path: RouteEnum.Help_Page,
        name: 'Help',
        component: HelpPage,
    },
    {
        path: RouteEnum.Confirmation_Page,
        name: 'ConfirmationPage',
        component: ConfirmationPage,
    },
    {
        path: RouteEnum.Not_Found_Page,
        name: 'Error',
        component: NotFoundPage,
    },
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;
