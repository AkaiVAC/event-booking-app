import { faker } from '@faker-js/faker';

const eventGenerator = (size: number) =>
    Promise.resolve(
        Array(size)
            .fill(null)
            .map(() => ({
                id: faker.datatype.uuid(),
                name: faker.company.catchPhrase(),
                image: faker.image.business(372, 171, true),
                date: faker.date.between(
                    '2023-01-01T00:00:00.000Z',
                    '2023-07-01T00:00:00.000Z'
                ),
                ticketCount: faker.datatype.number({ min: 0, max: 100 }),
            }))
    );

export { eventGenerator };
