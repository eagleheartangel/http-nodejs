import { Router } from 'express';
const router = Router();

router.get('/verification-completed', (req, res) => {
  res.render('index', { respuesta: JSON.stringify(req.body) });
});

module.exports = router;
