const router = require('express').Router();

router.post('/', (req, res) => {
  console.log(req.body);
  return res.render('index', { respuesta: JSON.stringify(req.body) });
});

module.exports = router;
