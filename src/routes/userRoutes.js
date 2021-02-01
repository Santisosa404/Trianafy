import { Router } from 'express';

// import all controllers
//

const routes = new Router();

// Add routes
routes.get('/',(req,res) =>{ console.log("Peticion de ruta usuario")} );
routes.post('/',(req,res) =>{ console.log("Peticion de ruta usuario")} );
routes.put('/',(req,res) =>{ console.log("Peticion de ruta usuario")} );
routes.delete('/',(req,res) =>{ console.log("Peticion de ruta usuario")} );

module.exports = routes;