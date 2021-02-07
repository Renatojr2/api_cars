import express from 'express';
import { promises } from 'fs' ;
import cors from 'cors' ;
import ('dotenv/config');

import router from './rotas.js';

const { readFile } = promises;


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
