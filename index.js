const express = require('express');
const cors = require('cors');
const { resumes } = require('./faker-resumes');

const app = express();

app.use(cors())
app.use(express.json());

app.get("/resume", function (request, response) {
    return response.status(200).send(resumes(12));
});

app.get("/resume/months/:month", function (request, response) {
    const data = resumes(12);
    const { month } = request.params;
    
    const monthResume = data.filter((resume) => resume.month === month);

    return response.status(200).send(monthResume);
});

app.listen(process.env.PORT || 3000);