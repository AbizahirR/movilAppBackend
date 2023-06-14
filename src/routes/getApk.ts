import { Router } from 'express';

const router = Router();

router.get('/', (req, res) => {
    res.redirect('https://docs.google.com/uc?export=download&id=1s2ddBU01XeqpA7gEjKdrwCvez8wK0IK3');
});

export { router }