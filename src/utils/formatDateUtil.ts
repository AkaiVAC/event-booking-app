export default (date: Date) => {
    const formatterdDate = new Intl.DateTimeFormat('en-GB', {
        dateStyle: 'medium',
    })
        .format(date)
        .replace(/ 2/, ', 2');

    return formatterdDate;
};
