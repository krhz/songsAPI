import { encrypt } from "../../helpers/bcrypt.helper";
import { SongRepository } from "../domain/song.repository";
import { SongValue } from "../domain/song.value";

export class SongUseCase {
  constructor(private readonly SongRepository: SongRepository) {}

  public  createSong = async ({title, author, description, id}) => {             
        const songValue = new SongValue({ title, author, description, owner:id });      
        const songCreated = await this.SongRepository.registerSong(songValue);
        return songCreated 
  }

  public  getDetailSong = async (uuid:string) => {
      const songDetail = await this.SongRepository.findSongById(uuid)
      return songDetail
  }

  public getSongbyAuthor = async (author:string) => {       
    const songDetail = await this.SongRepository.findUserByName(author)
    return songDetail  
  }

public getSong = async (author:string) => {       
    const songs = await this.SongRepository.listSong()
    return songs  
  }
}
