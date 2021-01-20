import bcrypt from 'bcryptjs';
export class User{
    constructor(id,username,fullname, email,password) {
        this.id=id;
        this.username=username;
        this.fullname=fullname;
        this.email=email;
        this.password=password;
    }
    
    toDto() {
        return {
            id: this.id,
            username: this.username, 
            fullname: this.fullname,
            email: this.email
        }
    }
}

const password = bcrypt.hashSync('miClave123', parseInt(process.env.BCRYPT_ROUNDS));


 let users = [
    new User(1,'ssosa','Santiago Sosa','santi@correo.com',password),
]



export const userRepository = {

    findByUsername(username) {
        let user;
        users.forEach(element => {
            if (element.username===username){
                user = element;
            } 
        });
        return user;

    },
    findById(user_id) {
      let us;
      users.forEach(user=>{
        if(user.id===user_id){
            us=user;
        }
      });
      return us;
     },

    create(username,name,email,password){
        return users.push(new User(8,username,name,email,password));
    }
}
