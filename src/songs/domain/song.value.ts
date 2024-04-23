import { uuid } from "../../helpers/uuid.helper";
import { SongEntity } from "./song.entity";

export class SongValue implements SongEntity {
    uuid:string;    
    title:string;
    author:string;
    description:string;
    owner:string;
    public:boolean;

    /**
     * constructor
     */
    constructor({title,author,description,owner}:{title:string,author:string,description:string,owner:string}) {
        this.uuid = uuid();
        this.title = title;
        this.author = author;
        this.description = description;
        this.owner = owner;
        this.public = true;
    }   
}
  