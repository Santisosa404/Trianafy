import mongoose from "mongoose";
import {Song} from './song'
const { Schema } = mongoose;

const PlayListSchema =({
        id:Number,
        name: String,
        descripcion: String,
        user_id: Number,
        song: [{song:Song}]
})

const PlayList = mongoose.model('PlayList',PlayListSchema);

