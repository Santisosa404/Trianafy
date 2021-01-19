import express from 'express';
import 'dotenv/config';
import bodyParser from 'body-parser';
import cors from 'cors';

const app = express();

app.use(cors());

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

app.listen(process.env.PORT, () => {
    console.log(`Aplicacion en el puerto ${process.env.PORT}`);
});
app.get('/', (req, res) => {
    return res.send('Recibió un método GET');
});

app.post('/', (req, res) => {
    return res.send('Recibió un método POST');
});

app.put('/', (req, res) => {
    return res.send('Recibió un método PUT');
});

app.delete('/', (req, res) => {
    return res.send('Recibió un método DELETE');
});
