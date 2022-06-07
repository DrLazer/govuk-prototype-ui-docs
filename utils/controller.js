const express = require('express');
const { urls, validation, match } = require('./constants');
const handleFormPost = require('../middleware/handleFormPost');
const { handleGetRequest } = require('../middleware/handleGetRequest');

const registerController = (source, config, logic, do307) => {
  const router = express.Router();
  router.get('/', (req, res, next) => {
    handleGetRequest(`${req.version}${source}`.substring(1))(req, res, next);
  });
  router.post('/', handleFormPost(source, config, logic, do307));
  return router;
};

module.exports = {
  express,
  urls,
  validation,
  match,
  handleFormPost,
  registerController,
};
