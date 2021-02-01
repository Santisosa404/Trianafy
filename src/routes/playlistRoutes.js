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

//Combinadas
routes.post('/:id1/songs/:id2',token(),PlayListController.addToPlayList);
routes.get('/:id/songs',token(),PlayListController.getSongs);
routes.get('/:id1/songs/:id2',token(),PlayListController.songFromPlayList);
routes.delete('/:id1/songs/:id2',token(),PlayListController.deleteFromPlayList);

module.exports = routes;
