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
            const song = await SongModel.findOne({_id:uuid});  
            if (!song) return {code:"2",message:"No Existe",data:{}}                    
            return song as unknown as SongEntity;            
        } catch (error) {
            console.log("🚀 ~ MongoRepository ~ findSongById ~ error:", error)            
            return Error("Method not implemented.");
        }
    }
    
    async findUserByName(author: string): Promise<any> {
        try {
            const song = await SongModel.findOne({author});
            return song as unknown as SongEntity;
        } catch (error) {            
            console.log("🚀 ~ MongoRepository ~ findUserByName ~ error:", error)
            throw new Error("Method not implemented.");
        }
    }
    
    async registerSong(song: SongEntity): Promise<any> {
        try {
            const createdSong = await SongModel.create(song);
            return createdSong;
        } catch (error) {                        
            console.log("🚀 ~ MongoRepository ~ registerSong ~ error:", error)
            return Error("Method not implemented.");
        }
    }
    
    async updateSong(song: Partial<any>): Promise<any> {
        try {
            return {"message":"asd"} as unknown as SongEntity;
        } catch (error) {            
            console.log("🚀 ~ MongoRepository ~ updateSong ~ error:", error)
            throw new Error("Method not implemented.");
        }
    }
    
    async listSong(): Promise<SongEntity[]> {
        try {            
            const songs = await SongModel.find()
            return songs as unknown as SongEntity[];
        } catch (error) {    
            console.log("🚀 ~ MongoRepository ~ listSong ~ error:", error)
            throw new Error("Method not implemented.");
        }
    }
}