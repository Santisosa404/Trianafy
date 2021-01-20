import express from 'express';
import 'dotenv/config';
import bodyParser from 'body-parser';
import cors from 'cors';
import morgan from 'morgan';
import morganBody from 'morgan-body';
import routes from './routes';
import passport from './services/passport'
import mongoose from 'mongoose';


const app = express();

app.use(cors());
app.use(morgan('dev'));
morganBody(app);


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(passport.initialize());

app.use('/users', routes.userRoutes);
app.use('/auth', routes.auth);

mongoose.connect(process.env.DB_URI, { useNewUrlParser: true, useUnifiedTopology: true }, error => {
    if (error) {
        console.log(`Error conectando a la base de datos ${JSON.stringify(error)}`);
    }
    else {
        console.log(`Conexion correcta a la base de datos`);
        app.listen(process.env.PORT, () => {
            console.log(`Aplicacion en el puerto ${process.env.PORT}`);
        });        
    }
});


