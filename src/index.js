const express = require('express');
const morgan = require('morgan');
const cors = require('cors');
const engine = require('ejs-mate');
const path = require('path');

const app = express();

app.engine('ejs', engine);
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
app.use(morgan('dev'));
app.use(
  cors({
    origin: '*',
    methods: ['GET', 'POST', 'DELETE', 'PUT'],
  })
);

const router = require('./routes/webhooks');

app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.use(router);

app.listen(3000, () => {
  console.log('Listen on port 3000');
});
