/**
 * Infra! Mongo 🙌
 */
import { SongEntity } from "../../domain/song.entity";//corregir
import { SongRepository } from "../../domain/song.repository";//corregir
import SongModel from "../model/song.shchema"
/**
 * Mongo! 
 */
export class MongoRepository implements SongRepository {
    async findSongById(uuid: string): Promise<any> {
        try {
            const song = await SongModel.findOne({uuid});
            return song as unknown as SongEntity;
        } catch (error) {            
            throw new Error("Method not implemented.");
        }
    }
    
    async findUserByName(author: string): Promise<any> {
        try {
            const song = await SongModel.findOne({author});
            return song as unknown as SongEntity;
        } catch (error) {            
            throw new Error("Method not implemented.");
        }
    }
    
    async registerSong(song: SongEntity): Promise<any> {
        try {
            console.log(song)
            const createdSong = await SongModel.create(song);
            return createdSong;
        } catch (error) {            
            console.error(error)
            return Error("Method not implemented.");
        }
    }
    
    async updateSong(song: Partial<any>): Promise<any> {
        try {
            return {"message":"asd"} as unknown as SongEntity;
        } catch (error) {            
            throw new Error("Method not implemented.");
        }
    }
    
    async listSong(): Promise<any> {
        try {
            return {"message":"asd"} as unknown as SongEntity;
        } catch (error) {            
            throw new Error("Method not implemented.");
        }
    }
}