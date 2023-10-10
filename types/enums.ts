export enum RouteEnum {
    Dashboard_Page = '/',
    Event_List_Page = '/events',
    Event_Booking_Page = '/book-event',
    Help_Page = '/help',
    Confirmation_Page = '/success',
    Not_Found_Page = '/:pathMatch(.*)*',
}

export enum IconEnum {
    LOGO = 'logo',
    SEARCH = 'search',
    CALENDAR = 'book',
    CALENDAR_GREY = 'sold-out',
    ADD = 'add',
    MENU = 'hamburger',
    CLOSE = 'close',
}
