import express from 'express';
import { loginOwnerController, registerOwnerController } from '../controllers/ownerctrl.js';

const router= express.Router();

router.route('/').get((req,res)=>{
    res.status(200).send('Owner Routes is working')
})

router.post('/login',loginOwnerController);

router.post('/register',registerOwnerController);

export default router;