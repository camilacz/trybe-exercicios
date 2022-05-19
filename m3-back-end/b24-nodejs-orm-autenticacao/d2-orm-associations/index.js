const bodyParser = require('body-parser');

const express = require('express');
const PatientsRouter = require('./routes/PatientsRouter');

const app = express();
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use('/patients', PatientsRouter);

const PORT = 3000;

app.listen(PORT, () => {
  console.log(`Port: ${PORT}`);
});