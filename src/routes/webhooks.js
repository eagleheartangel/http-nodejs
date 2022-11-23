const router = require('express').Router();

router.get('/', (req, res) => {
  return res.render('index', { respuesta: JSON.stringify(req.body) });
});

module.exports = router;
