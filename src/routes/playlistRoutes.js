import { Router } from 'express';
import {PlayListController} from '../controllers/playlistController';
import {token} from '../services/passport';
const routes = new Router();

//Poner lo del token en middleware
routes.get('/',token(),PlayListController.allPlayList);
routes.get('/:id',token(),PlayListController.getPlayList);
routes.post('/',token(),PlayListController.createPlayList);
routes.put('/:id',token(),PlayListController.editPlayList);
// routes.delete('/', );

module.exports = routes;
