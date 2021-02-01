import { PlayListRepository } from '../models/playlist';
export const PlayListController = {

    allPlayList: async (req, res) => {
        const all = await PlayListRepository.findAll();
        if (Array.isArray(all) && all.length > 0) {
            res
                .json(all)
                .sendStatus(200);
        } else {
            res.sendStatus(404)
        }
    },
    createPlayList: async (req, res) => {
        const newPlayList = await PlayListRepository.savePlayList({
            name: req.body.name,
            description: req.body.description,
            user_id: req.user.id,
            songs: []
        });
        return newPlayList!=undefined? res.sendStatus(201).json(newPlayList) : res.sendStatus(400);
    },
    getPlayList: async (req, res) => {
        const playList = await PlayListRepository.findById(req.params.id);
        if (playList != undefined) {
            res.json(playList);
        } else {
            res.sendStatus(404);

        }
    },

    editPlayList: async (req, res) =>{
        const editPlayList = await PlayListRepository.editById(req.params.id,{
            name:req.body.name,
            description: req.body.description,
            user_id : req.user.id,
            song : req.body.songs
        });
        if(editPlayList!=undefined){
            res.json(editPlayList);
        }else{
            res.sendStatus(404);
        }

    }

}