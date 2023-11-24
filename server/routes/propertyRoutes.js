import express from 'express'
import { addProperty, getAllPropertyController, getPropertyByIdController } from '../controllers/listingctrl.js'

const router=express.Router();

router.route('/').get((req,res)=>{
    res.status(200).send('property routes working')
})

router.post('/addProperty',addProperty);

router.post('/get-all-property',getAllPropertyController);

router.post('/get-property',getPropertyByIdController);

export default router;