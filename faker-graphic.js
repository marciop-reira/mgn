const { faker } = require("@faker-js/faker");

function graphic(count) {
  const data = [];
  
  for (var i = 0; i < count; i++) {
    data.push(faker.number.int({ min: 1, max: 200}));
  }

  return data;
}

module.exports = { graphic }