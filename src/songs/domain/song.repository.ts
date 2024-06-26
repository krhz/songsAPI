import { PaginatioMongodb, PaginationResult, SongEntity } from "../domain/song.entity";

export interface SongRepository {
  findSongById(codigo: string): Promise<SongEntity | null>;
  findSongByOwner(codigo: string): Promise<SongEntity | null>;
  findUserByName(name: string): Promise<SongEntity | null>;
  registerSong(song: SongEntity): Promise<SongEntity | null>;
  updateSong( songID: string, song: Partial<SongEntity> ): Promise<SongEntity | null>;
  // listSong(): Promise<ISongModel[] | null>;
  listSong(optionsPaginacionMongo:PaginatioMongodb): Promise<PaginationResult<SongEntity>>;
}


