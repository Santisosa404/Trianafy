import {User,userRepository} from '../models/user';
import bcrypt from 'bcryptjs';
import {JwtService} from '../services/jwt'

export const AuthController  = {


    register: (req, res, next) => {
        let us ={
            username : req.body.username,
            fullname : req.body.fullname,
            email: req.body.email,
            password : req.body.password
        };
        userRepository.create(us) ;
        res.status(201).json({
            username: req.body.username,
            email: req.body.email
        });
    },

    login: (req, res, next) => {
        const token = JwtService.sign(req.user);
        res.status(201).json({
            user: req.user,
            token: token
        });
    }
}