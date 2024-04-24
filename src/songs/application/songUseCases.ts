import { SongRepository } from "../domain/song.repository";
import { SongValue } from "../domain/song.value";

export class SongUseCase {
  constructor(private readonly SongRepository: SongRepository) {}

  public createSong = async ({ title, author, description, id }) => {
    const songValue = new SongValue({ title, author, description, owner: id });
    const songCreated = await this.SongRepository.registerSong(songValue);
    return songCreated;
  };

  public updateSong = async (songID, { title, author, description, id }) => {
    const songValue = new SongValue({ title, author, description, owner: id });
    const songCreated = await this.SongRepository.updateSong(songID, songValue);
    return songCreated;
  };

  public getDetailedSong = async (codigo: string) => {
    const songDetail = await this.SongRepository.findSongById(codigo);
    return songDetail;
  };

  public getSongByOwner = async (codigo: string) => {
    const songDetail = await this.SongRepository.findSongByOwner(codigo);
    return songDetail;
  };

  public getSongbyAuthor = async (author: string) => {
    const songDetail = await this.SongRepository.findUserByName(author);
    return songDetail;
  };

  public getSongs = async () => {
    const songs = await this.SongRepository.listSong();
    return songs;
  };
}
