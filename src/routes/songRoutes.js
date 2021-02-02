import { Router } from 'express';
import {SongController} from '../controllers/songController';
import {token} from '../services/passport/index';
const routes = new Router();

routes.get('/',token(), SongController.allSong);
routes.post('/',token(),SongController.createSong);
routes.get('/:id',token(),SongController.getSong);
routes.put('/:id', token(),SongController.editSong);
routes.delete('/:id',token(), SongController.deleteSong);


module.exports = routes;

