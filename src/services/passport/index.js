import 'dotenv/config';
import passport from 'passport';
import { Strategy as LocalStrategy } from 'passport-local';
import { Strategy as JwtStrategy, ExtractJwt } from 'passport-jwt';
import { User, userRepository } from '../../models/user';
import bcrypt from 'bcryptjs';

passport.use(new LocalStrategy({
    usernameField: "username",
    passwordField: "password",
    session: false
}, (username, password, done) => {
    const user = userRepository.findByUsername(username);
    if (user == undefined)
        return done(null, false);
    else if (!bcrypt.compareSync(password, user.password))
        return done(null, false);
    else
        return done(null, user.toDto());
}));

const opts = {
    jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
    secretOrKey: process.env.JWT_SECRET,
    algorithms: [process.env.JWT_ALGORITHM]
}

passport.use('token', new JwtStrategy(opts, (jwt_payload, done) => {
    const id = jwt_payload.sub;

    const user = userRepository.finndById(user_id);
    if (user == undefined)
        return done(null, false); // No existe el usuario
    else
        return done(null, user);
}));

export default passport;