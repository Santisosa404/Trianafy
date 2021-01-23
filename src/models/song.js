import mongoose from "mongoose";

const { Schema } = mongoose;

const SongSchema = new Schema({
    title : String,
    artist : String,
    album : String,
    year : String,
});

export const Song = mongoose.model('Song',SongSchema);

export const SongController = {

    async createSong(newSong){
        const Song = new Song({
            title: newSong.name,
            artist:newSong.artist,
            album : newSong.album,
            year : newSong.year
        })
    }


}