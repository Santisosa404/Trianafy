export class PlayList{
    constructor(id,name,descripcion,user_id,song=[]) {
        this.id=id;
        this.name=name;
        this.descripcion=descripcion;
        this.user_id=user_id;
        this.song=song;
    }
}