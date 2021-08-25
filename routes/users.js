var express = require('express');
var router = express.Router();

router.get('/', (req, res, next) => {
  res.status(200).send('respond with a resource');
});

router.get('/:userId', (req, res, next) => {
  res.status(200).send('respond with a resource');
});

router.post('/', (req, res, next) => {
  res.status(200).send('respond with a resource');
});

router.put('/:userId', (req, res, next) => {
  res.status(200).send('respond with a resource');
});

module.exports = router;
