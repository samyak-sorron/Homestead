import express from 'express'
import { loginTenantController, registerTenantController } from '../controllers/tenantctrl.js';

const router= express.Router();

router.route('/').get((req,res)=>{
    res.send('tenantRoutes')
})

router.post('/login',loginTenantController);

router.post('/register',registerTenantController);

export default router;