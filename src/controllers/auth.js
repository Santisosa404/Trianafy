import {User,userRepository} from '../models/user';
import bcrypt from 'bcryptjs';
import {JwtService} from '../services/jwt'

export const AuthController  = {


    register: (req, res, next) => {
        userRepository.create(req.body.username,req.body.fullname,req.body.email,req.body.password) ;
        res.status(201).json({
            username: req.body.username,

        });
    },

    login: (req, res, next) => {
        console.log('realizando login');
        const token = JwtService.sign(req.user);
        res.status(201).json({
            user: req.user,
            token: token
        });
    }
}