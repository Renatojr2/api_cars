const express = require('express');
const { promises } = require('fs');
const { readFile } = promises;


const router = express.Router();


router.get('/', async (req, res) => {
  try {
    const cars = await readFile('cars.json');
    res.send(cars);
  } catch (err) {
    res.status(400).send({ err: err });
  }
});


module.exports =  router;
