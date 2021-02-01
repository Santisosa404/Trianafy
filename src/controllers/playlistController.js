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
    deletePlayList: async (req,res) =>{
        const delPlayList = await PlayListRepository.deleteById(req.params.id);
        return delPlayList== undefined? res.sendStatus(204): res.sendStatus(404);
    },

    editPlayList: async (req, res) =>{
        const editPlayList = await PlayListRepository.editById(req.params.id,{
            name:req.body.name,
            description: req.body.description,
            user_id : req.user.id,
            song : req.body.songs
        });
        if(req.body.id !=null){
            return res.sendStatus(409);
        }else if(editSong!=undefined){
            return res.sendStatus(204);
        }else{
            return res.sendStatus(404);
        }
    },
    deletePlayList: async (res,req) =>{
        console.log('jolaaaa');
        const delPlayList = await PlayListRepository.delete(req.params.id);
        return delPlayList!=null? res.sendStatus(204) : res.sendStatus(404);
    },

    addToPlayList: async (req, res) => {
        const playList = await PlayListRepository.findById(req.params.id1);
        const song = await SongRepository.findById(req.params.id2);
        playList.songs.push(song);
        return PlayListRepository.editById(req.params.id1, playList) != undefined ? res.sendStatus(200) : res.sendStatus(404);
    },
    getSongs: async (req, res) => {
        const songs = await PlayListRepository.findSongs(req.params.id);
        return songs != undefined ? res.json(songs) : res.sendStatus(404); //Mensaje o array vacio
    },
    songFromPlayList: async (req, res) => {
        const songs = await PlayListRepository.findSongs(req.params.id1);
        const result = songs.filter(song => song._id == req.params.id2);
        return result.length > 0 ? res.json(result) : res.sendStatus(404);
    },
    deleteFromPlayList: async (req, res) => {
        const playList = await PlayListRepository.findById(req.params.id1);
        if (playList != undefined) {
            playList.songs.pull(req.params.id2);
            playList.save();
          return  res.json(await PlayListRepository.findById(req.params.id1));
        } else {
            return res.sendStatus(400);
        }
    }    
}