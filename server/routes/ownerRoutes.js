import express from 'express'
import { loginOwnerController, registerOwnerController } from '../controllers/ownerctrl.js';

const router= express.Router();

router.post('/login',loginOwnerController);

router.post('/register',registerOwnerController);

export default router;