const express = require('express');
const morgan = require('morgan');
const cors = require('cors');
const engine = require('ejs-mate');
const path = require('path');

const app = express();
const port = process.env.PORT || 3000;

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

app.listen(port, () => {
  console.log('Listen on port ' + port);
});
