const express = require('express');

const router = express.Router();
const { urls } = require('../utils/constants');

router.get('/', (req, res, next) => {
  res.render('v1-0-0/index', (error, html) => {
    res.set({ 'Content-type': 'text/html; charset=utf-8' });
    res.end(html);
  });
});

module.exports = router;
