import { SongRepository } from './models/song';
import {userRepository} from './models/user';
const users =[
    {
        "username": "ssosa",
        "fullname": "Santiago Sosa Díaz",
        "email": "sosa.disan20@triana.salesianos.edu",
        "password": "MiClave123"
    },{
        "username": "jmgracia",
        "fullname": "Juan Manuel Gracia Pardal",
        "email": "gracia.pajual@triana.salesianos.edu",
        "password": "MiClave123"
    },{
        "username": "chpayo",
        "fullname": "Christian Payo Parra",
        "email": "payo.pachr20@triana.salesianos.edu",
        "password": "MiClave123"
    },{
        "username": "lmlopez",
        "fullname": "Luis Miguel López Magaña",
        "email": "luismi.lopez@salesianos.edu",
        "password": "MiClave123"
    }
];

users.forEach(user => {
    userRepository.create(user);
});

const songs = [
    {

    }
];

songs.forEach(song => {
    SongRepository.saveSong(song);
});
