import express from 'express';
import 'dotenv/config';
import cors from 'cors';

const app = express();

app.use(cors());

app.listen(process.env.PORT,()=>{
    console.log('Aplicacion en el puerto '+process.env.PORT);
});
