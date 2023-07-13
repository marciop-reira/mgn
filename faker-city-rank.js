const { faker, fakerPT_BR } = require("@faker-js/faker");

function rank(count) {
  const data = [];
  
  for (var i = 0; i < count; i++) {
    data.push({
      name: fakerPT_BR.location.city(),
      amount: faker.number.float({min: 1000, max: 10000, precision:0.01})
    });
  }

  return data;
}

module.exports = { rank }