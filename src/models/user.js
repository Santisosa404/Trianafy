import bcrypt from 'bcryptjs';
export class User{
    constructor(id,name,fullname, email,password ) {
        this.id=id;
        this.name=name;
        this.fullname=fullname;
        this.email=email;
        this.password=password;
    }
}

const password = bcrypt.hashSync('miClave123', parseInt(process.env.BCRYPT_ROUNDS));


let users = [
    new User('ssosa','Santiago Sosa','santi@correo.com',password,1),
]

const usernameExist = (username) => {
    let usernames = users.map(user => user.username);
    return usernames.includes(username);
} 

const userRepository = {

    findByUsername(username) {
       let result = users.filter(user => user.username == username);
       return Array.isArray(result) && result.length > 0 ? result[0] : undefined;   
    },
}
