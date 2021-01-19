import { Router } from 'express';
import { body } from 'express-validator';
import { AuthController } from '../controllers/auth';

const router = new Router();

router.post('/register',[body('username'),body('password'),body('id')],AuthController.register);