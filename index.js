const express = require('express');
const { faker, fakerPT_BR } = require('@faker-js/faker');
const cors = require('cors');

const app = express();

app.use(cors())
app.use(express.json());

app.get("/resume", function (request, response) {
  return response.status(200).send(
    [
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
          ]
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
        ]
    }
    ]
  );
});

app.listen(process.env.PORT || 3000);