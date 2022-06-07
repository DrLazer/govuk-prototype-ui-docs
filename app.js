const express = require('express');
const nunjucks = require('nunjucks');
const filePath = require('path');

const app = express();

const port = process.env.PORT || 3001;

app.set('view engine', 'njk');
app.set('views', `${__dirname}/views`);
nunjucks.configure([
  `${__dirname}/node_modules/govuk-frontend`,
  `${__dirname}/views/`,
], {
  autoescape: true,
  express: app,
});

app.use('/', express.static(filePath.join(__dirname, '/public')));
app.get('/', (req, res) => {
  res.render('v1-0-0/index');
})

app.listen(port, () => {
  // eslint-disable-next-line
  console.log(`App listening at http://localhost:${port}`);
});
