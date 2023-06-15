import { Router } from 'express';

const router = Router();

router.get('/', (req, res) => {
    let APK_URL = process.env.APK_URL || "";
    res.redirect(APK_URL);
});

export { router }