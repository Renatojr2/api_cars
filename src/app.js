const express = require('express');
const { promises } = require('fs') ;
const cors = require('cors') ;
require('dotenv/config.js');
const { readFile } = promises;

const router = require('./rotas.js') ;

const app = express();
app.use(cors());
app.use(express.json());
app.use('/cars', router);

app.listen(process.env.PORT || 3333, async () => {
  try {
    await readFile('cars.json');
  } catch (err) {
    print(e)
  }
});
