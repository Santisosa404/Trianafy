import mongoose from 'mongoose';
import bcrypt from 'bcryptjs';

const { Schema } = mongoose;


const UserSchema = new Schema({
    id: Number,
    username: String,
    fullname: String,
    email: String,
    password: String
}, { versionKey: false }
);

const User = mongoose.model('User', UserSchema);


export const userRepository = {

    async findAll() {
        const all = await User.find({}).exec();
        return all;
    },

    async findByUsername(username) {
        const user = await User.find({ username: username });
        return user;
    },
    async findById(user_id) {
        let user = await User.findById(id).exec();
        return user;
    },
    async create(Nuser) {
        const password = bcrypt.hashSync(Nuser.password, parseInt(process.env.BCRYPT_ROUNDS));
        const user = new User({
            username: Nuser.username,
            email: Nuser.email,
            fullname: Nuser.fullname,
            password: password
        });
        const save = await user.save();
        return this.toDto(save);
    },
    toDto(user) {
        return {
            id: user.id,
            username: user.username,
            fullname: user.fullname,
            email: user.email
        }
    }, 
    async updateById(id, modifiedUser) {

        const userSaved = await User.findById(id);

        if (userSaved != null) {
            return await Object.assign(userSaved, modifiedUser).save();
        } else
            return undefined;
    },
    update(modifiedUser) {
        return this.update(modifiedUser.id, modifiedUser);
    },
    async delete(id) {
        await User.findByIdAndRemove(id).exec();
    }

}

const emailExist = async (email) => {
    let result = await User.countDocuments({ email: email }).exec();
    return result > 0;
}


