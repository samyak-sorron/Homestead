import express from 'express'
import * as dotenv from 'dotenv'
import cors from 'cors'
import colors from 'colors'
import morgan from 'morgan'

import connectDB from './config/db.js';
import ownerRoutes from './routes/ownerRoutes.js'
import tenantRoutes from './routes/tenantRoutes.js'


dotenv.config();

const app = express();
app.use(cors());
app.use(express.json({limit:'50mb'}));
app.use(morgan('dev'));

// app.use('/api/v1/owner',ownerRoutes);
// app.use('/api/v1/tenant',tenantRoutes);

app.get('/',async(req,res)=>{
    res.send('hello Ladies!')
})


try {
    connectDB();
    app.listen(8080,()=>console.log('Server has started on port http://localhost:8080'.bgCyan.black))
} catch (error) {
    console.log(error.bgRed.white);
}