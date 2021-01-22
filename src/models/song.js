import mongoose from "mongoose";

const { Schema } = mongoose;

const SongSchema = new Schema({
    title : String,
    artist : String,
    album : String,
    year : String,
});

export const Song = mongoose.model('Song',SongSchema);
