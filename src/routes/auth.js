import { Router } from 'express';
import { body } from 'express-validator';
import { AuthController } from '../controllers/auth';
import { password } from '../services/passport';

const routes = new Router();

routes.post('/register',[body('id'),body('username'),body('fullname'),body('email'),body('password')],AuthController.register);
routes.post('/login',password(),AuthController.login);


module.exports = routes;