import mongoose from "mongoose";
const { Schema } = mongoose;

const PlayListSchema =new Schema({
        name: String,
        description: String,
        user_id: { 
                type:Schema.Types.ObjectId,
                ref: 'User'},
        songs: [{
                type: Schema.Types.ObjectId,
                ref: 'Song'
        }]
},{versionKey: false});

export const PlayList = mongoose.model('PlayList',PlayListSchema);

export const PlayListRepository={
        async findAll(){
                console.log('entro find all');
                return await PlayList
                .find()
                .populate('User','_id')
                .populate('Song')
        },
        async createPlayList(newPlayList){
                const playList = new PlayList({
                        name: newPlayList.name,
                        description: newPlayList.description,
                        user_id : newPlayList.user_id,
                        songs: newPlayList.songs
                });
                const result = await playList.save();
                return result;
        },
        async findById(playList_id){
                console.log('Entro por id');
                console.log(playList_id);
                const result = await  PlayList.findById(playList_id).populate('User','_id').populate('Song');
                console.log('Result');
                console.log(result);
                return result != null ? result : undefined;
        },
}