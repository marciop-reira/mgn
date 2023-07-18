const { faker } = require("@faker-js/faker");
const { rank } = require("./faker-city-rank");
const { graphic } = require("./faker-graphic");

function resumes(count) {
  const data = [];
  
  for (var i = 0; i < count; i++) {
    data.push({
      total_clients: faker.number.int({min: 50, max: 1000}),
      total_cities: faker.number.int({min: 50, max: 150}),
      total_signatures: faker.number.int({min: 50, max: 10000}),
      total_partner_stores: faker.number.int({min: 50, max: 90}),
      month: `${(i + 1).toString().padStart(2, '0')}-2023`,
      rank: rank(10),
      graphic: graphic(30),
      previous_month_comparison: {
        total_clients: faker.number.float({min: -2, max: 2, precision: 0.0001}),
        total_cities: faker.number.float({min: -2, max: 2, precision: 0.0001}),
        total_signatures: faker.number.float({min: -2, max: 2, precision: 0.0001}),
        total_partner_stores: faker.number.float({min: -2, max: 2, precision: 0.0001}),
      }
    });
  }

  return data;
}

module.exports = { resumes }