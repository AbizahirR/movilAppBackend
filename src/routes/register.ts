import { Router } from 'express';
import { registerNewUser } from '../controllers/register';

const router = Router();

router.post('/', registerNewUser);
router.post('/doctor', registerNewUser);

export { router }