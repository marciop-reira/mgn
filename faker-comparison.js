const { faker } = require("@faker-js/faker");

function comparison(min, max) {
  return {
    value: faker.number.float({min, max, precision: 0.0001}),
    comparison: faker.helpers.arrayElement(['better', 'worse', 'same'])
  };
}

module.exports = { comparison }