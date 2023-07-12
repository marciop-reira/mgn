const express = require('express');
const { v4: uuidv4 } = require('uuid');

const app = express();

app.use(express.json());

app.get("/resume", function (request, response) {
  return response.status(200).send(
    [
      {
          total_clients: "(fakeRandomNumber:4)",
          total_cities: "(fakeRandomNumber:3)",
          total_signatures: "(fakeRandomNumber:5)",
          total_partner_stores: "(fakeRandomNumber:2)",
          month: "Junho",
          rank: [
              {
                  name: "(fakeCity:pt_BR)",
                  amount: "(fakeRandomFloat:2:1000:10000)"
              },
              {
                  name: "(fakeCity:pt_BR)",
                  amount: "(fakeRandomFloat:2:1000:10000)"
              },
              {
                  name: "(fakeCity:pt_BR)",
                  amount: "(fakeRandomFloat:2:1000:10000)"
              },
              {
                  name: "(fakeCity:pt_BR)",
                  amount: "(fakeRandomFloat:2:1000:10000)"
              },
              {
                  name: "(fakeCity:pt_BR)",
                  amount: "(fakeRandomFloat:2:1000:10000)"
              },
              {
                  name: "(fakeCity:pt_BR)",
                  amount: "(fakeRandomFloat:2:1000:10000)"
              },
              {
                  name: "(fakeCity:pt_BR)",
                  amount: "(fakeRandomFloat:2:1000:10000)"
              },
              {
                  name: "(fakeCity:pt_BR)",
                  amount: "(fakeRandomFloat:2:1000:10000)"
              },
              {
                  name: "(fakeCity:pt_BR)",
                  amount: "(fakeRandomFloat:2:1000:10000)"
              },
              {
                  name: "(fakeCity:pt_BR)",
                  amount: "(fakeRandomFloat:2:1000:10000)"
              }
          ]
      },
      {
          total_clients: "(fakeRandomNumber:4)",
          total_cities: "(fakeRandomNumber:3)",
          total_signatures: "(fakeRandomNumber:5)",
          total_partner_stores: "(fakeRandomNumber:2)",
          month: "Julho",
          rank: [
              {
                  name: "(fakeCity:pt_BR) Chapel",
                  amount: "(fakeRandomFloat:2:1000:10000)"
              },
              {
                  name: "(fakeCity:pt_BR) Britain",
                  amount: "(fakeRandomFloat:2:1000:10000)"
              },
              {
                  name: "(fakeCity:pt_BR) Vernon",
                  amount: "(fakeRandomFloat:2:1000:10000)"
              },
              {
                  name: "(fakeCity:pt_BR)",
                  amount: "(fakeRandomFloat:2:1000:10000)"
              },
              {
                  name: "(fakeCity:pt_BR)",
                  amount: "(fakeRandomFloat:2:1000:10000)"
              },
              {
                  name: "(fakeCity:pt_BR)",
                  amount: "(fakeRandomFloat:2:1000:10000)"
              },
              {
                  name: "(fakeCity:pt_BR) Green",
                  amount: "(fakeRandomFloat:2:1000:10000)"
              },
              {
                  name: "(fakeCity:pt_BR)",
                  amount: "(fakeRandomFloat:2:1000:10000)"
              },
              {
                  name: "(fakeCity:pt_BR)",
                  amount: "(fakeRandomFloat:2:1000:10000)"
              },
              {
                  name: "(fakeCity:pt_BR)",
                  amount: "(fakeRandomFloat:2:1000:10000)"
              }
          ]
      }
    ]
  );
});

app.listen(process.env.PORT || 3000);