import { Router } from 'express';
const router = Router();

router.get('/verification-completed', (req, res) => {
  return res.render('index', { respuesta: 'Hola Ivette !!' });
});

module.exports = router;
