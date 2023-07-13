const { faker, fakerPT_BR } = require('@faker-js/faker');
const { clientsPerDay } = require('./faker-graphic');

const RESUME = [
  {
    total_clients: faker.number.int({min: 50, max: 1000}),
    total_cities: faker.number.int({min: 50, max: 150}),
    total_signatures: faker.number.int({min: 50, max: 10000}),
    total_partner_stores: faker.number.int({min: 50, max: 90}),
    month: "Junho",
    rank: [
        {
            name: fakerPT_BR.location.city(),
            amount: faker.number.float({min: 1000, max: 10000, precision:0.01})
        },
        {
            name: fakerPT_BR.location.city(),
            amount: faker.number.float({min: 1000, max: 10000, precision:0.01})
        },
        {
            name: fakerPT_BR.location.city(),
            amount: faker.number.float({min: 1000, max: 10000, precision:0.01})
        },
        {
            name: fakerPT_BR.location.city(),
            amount: faker.number.float({min: 1000, max: 10000, precision:0.01})
        },
        {
            name: fakerPT_BR.location.city(),
            amount: faker.number.float({min: 1000, max: 10000, precision:0.01})
        },
        {
            name: fakerPT_BR.location.city(),
            amount: faker.number.float({min: 1000, max: 10000, precision:0.01})
        },
        {
            name: fakerPT_BR.location.city(),
            amount: faker.number.float({min: 1000, max: 10000, precision:0.01})
        },
        {
            name: fakerPT_BR.location.city(),
            amount: faker.number.float({min: 1000, max: 10000, precision:0.01})
        },
        {
            name: fakerPT_BR.location.city(),
            amount: faker.number.float({min: 1000, max: 10000, precision:0.01})
        },
        {
            name: fakerPT_BR.location.city(),
            amount: faker.number.float({min: 1000, max: 10000, precision:0.01})
        }
    ],
    graphic: clientsPerDay(30)
  },
  {
    total_clients: faker.number.int({min: 50, max: 1000}),
    total_cities: faker.number.int({min: 50, max: 150}),
    total_signatures: faker.number.int({min: 50, max: 10000}),
    total_partner_stores: faker.number.int({min: 50, max: 90}),
    month: "Julho",
    rank: [
        {
            name: fakerPT_BR.location.city(),
            amount: faker.number.float({min: 1000, max: 10000, precision:0.01})
        },
        {
            name: fakerPT_BR.location.city(),
            amount: faker.number.float({min: 1000, max: 10000, precision:0.01})
        },
        {
            name: fakerPT_BR.location.city(),
            amount: faker.number.float({min: 1000, max: 10000, precision:0.01})
        },
        {
            name: fakerPT_BR.location.city(),
            amount: faker.number.float({min: 1000, max: 10000, precision:0.01})
        },
        {
            name: fakerPT_BR.location.city(),
            amount: faker.number.float({min: 1000, max: 10000, precision:0.01})
        },
        {
            name: fakerPT_BR.location.city(),
            amount: faker.number.float({min: 1000, max: 10000, precision:0.01})
        },
        {
            name: fakerPT_BR.location.city(),
            amount: faker.number.float({min: 1000, max: 10000, precision:0.01})
        },
        {
            name: fakerPT_BR.location.city(),
            amount: faker.number.float({min: 1000, max: 10000, precision:0.01})
        },
        {
            name: fakerPT_BR.location.city(),
            amount: faker.number.float({min: 1000, max: 10000, precision:0.01})
        },
        {
            name: fakerPT_BR.location.city(),
            amount: faker.number.float({min: 1000, max: 10000, precision:0.01})
        }
    ],
    graphic: clientsPerDay(30)
}
];


module.exports = { RESUME }