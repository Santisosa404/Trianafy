import express from 'express';
import 'dotenv/config';
import bodyParser from 'body-parser';
import cors from 'cors';
import morgan from 'morgan';
import morganBody from 'morgan-body';
import routes from './routes';
import passport from './services/passport'

const app = express();

app.use(cors());
app.use(morgan('dev'));
morganBody(app);


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

app.use(passport.initialize());

app.listen(process.env.PORT, () => {
    console.log(`Aplicacion en el puerto ${process.env.PORT}`);
});

app.use('/users',routes.userRoutes)
