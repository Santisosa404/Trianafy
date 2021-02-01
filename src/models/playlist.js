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
                return await PlayList
                .find()
                .populate('User','_id')
                .populate('Song')
        },
        async savePlayList(newPlayList){
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
                const result = await  PlayList.findById(playList_id).populate('User','_id').populate('Song');
                return result != null ? result : undefined;
        },
        async editById(playList_id, playListMod){
                const playList = await PlayList.findById(playList_id);
                return playList!= null ? await Object.assign(playList, playListMod).save() : undefined;
        }
}