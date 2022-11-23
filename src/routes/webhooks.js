const router = require('express').Router();

router.get('/', (req, res) => {
  return res.render('index', { respuesta: 'Hola mundo !!' });
});

module.exports = router;
