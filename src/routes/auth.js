import { Router } from 'express';
import { body } from 'express-validator';
import { AuthController } from '../controllers/auth';
import { password } from '../services/passport';
import { emailExist } from '../models/user';

const routes = new Router();

routes.post('/register', [body('id'), body('username'), body('fullname'), body('email').isEmail().custom(email => {

    if (emailExist(email)) {
        throw new Error('El email ya está registrado, inicie sesión');
    } else {
        return true;
    }

}), body('password')], AuthController.register);
routes.post('/login', password(), AuthController.login);


module.exports = routes;