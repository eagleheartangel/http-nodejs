import { Router } from 'express';
const router = Router();

router.post('/completed', (req, res) => {
  const bdy = req.body;
  console.log(bdy);
  return res.render('index', { respuesta: 'Hola mundo !!' });
});

module.exports = router;
