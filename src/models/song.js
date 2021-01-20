import mongoose from "mongoose";

const { Schema } = mongoose;

const SongSchema = new Schema({
    id : Number,
    title : String,
    artist : String,
    album : String,
    year : String,
});

const Song = mongoose.model('Song',SongSchema);
