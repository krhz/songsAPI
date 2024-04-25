/**
 * Infra! Mongo 🙌
 */
import { SongEntity } from "../../domain/song.entity"; //corregir
import { SongRepository } from "../../domain/song.repository"; //corregir
import SongModel from "../model/song.schema";

/**
 * Mongo!
 */
export class MongoRepository implements SongRepository {
  async findSongById(codigo: string): Promise<any> {
    try {
      const song = await SongModel.find({ _id: codigo });
      if (!song) return { code: "2", message: "No Existe", data: {} };
      return song as unknown as SongEntity;
    } catch (error) {
      console.log("🚀 ~ MongoRepository ~ findSongById ~ error:", error);
      throw new Error("Error en la búsqueda de la canción.");
    }
  }

  async findSongByOwner(codigo: string): Promise<any> {
    try {
      const song = await SongModel.find({ owner: codigo });
      if (!song) return { code: "2", message: "No Existe", data: {} };
      return song as unknown as SongEntity;
    } catch (error) {
      console.log("🚀 ~ MongoRepository ~ findSongByOwner ~ error:", error);
      throw new Error("Error en la búsqueda de la canción.");
    }
  }

  async findUserByName(author: string): Promise<any> {
    try {
      const song = await SongModel.findOne({ author });
      return song as unknown as SongEntity;
    } catch (error) {
      console.log("🚀 ~ MongoRepository ~ findUserByName ~ error:", error);
      throw new Error("Method not implemented.");
    }
  }

  async registerSong(song: SongEntity): Promise<any> {
    try {
      const createdSong = await SongModel.create(song);
      return createdSong;
    } catch (error) {
      console.log("🚀 ~ MongoRepository ~ registerSong ~ error:", error);
      return Error("Method not implemented.");
    }
  }

  async updateSong(songID: string, song: Partial<any>): Promise<any> {
    try {
      const createdSong = await SongModel.findOneAndUpdate(
        { id: songID },
        { $set: song },
        { returnNewDocument: true }
      );
      if (!createdSong) return { message: "No se han actualizado registros" };
      return { message: `Song.${createdSong.id} Updated successfully` };
    } catch (error) {
      console.log("🚀 ~ MongoRepository ~ updateSong ~ error:", error);
      return Error("Method not implemented.");
    }
  }

  async listSong(): Promise<SongEntity[]> {
    try {
      const songs = await SongModel.find();
      return songs as unknown as SongEntity[];
    } catch (error) {
      console.log("🚀 ~ MongoRepository ~ listSong ~ error:", error);
      throw new Error("Method not implemented.");
    }
  }
}
