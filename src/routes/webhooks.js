import { Router } from 'express';
const router = Router();

router.get('/completed', (req, res) => {
  return res.render('index', { respuesta: 'Hola mundo !!' });
});

module.exports = router;
