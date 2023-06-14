import { Router } from 'express';
import { getDoctors } from '../controllers/doctor';
import { checkJWT } from '../middlewares/session';

const router = Router();

router.get('/', getDoctors);

export { router }