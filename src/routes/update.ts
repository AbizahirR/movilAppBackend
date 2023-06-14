import { Router } from 'express';
import { updateDoctor, updateUser } from '../controllers/update';

const router = Router();

router.post('/u', updateUser);
router.post('/d', updateDoctor);

export { router }