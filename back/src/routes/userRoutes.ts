import { Router } from 'express';
import { signup } from '../controllers/User';

const router = Router();
//Users routes (sign in and sign up).

router.post('/signup', signup);
// router.post('/signin', userCtrl.signin);

export default router;