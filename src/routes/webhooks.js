const router = require('express').Router();

router.post('/', (req, res) => {
  return res.render('index', { respuesta: 'Hola mundo!' });
});

router.post('/completed', (req, res) => {
  console.log(req.body);
  return res.status(200).end();
});

module.exports = router;
