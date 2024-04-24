/**
 * Infra! Mongo 🙌
 */
import { UserEntity } from "../../domain/user.entity";//corregir
import { UserRepository } from "../../domain/user.repository";//corregir
import UserModel from "../model/user.shchema"
/**
 * Mongo! 
 */
export class MongoRepository implements UserRepository {
    async findUserById(uuid: string): Promise<any> {
        console.log("🚀 ~ MongoRepository ~ findUserById ~ uuid:", uuid)
        const user = await UserModel.findOne({_id:uuid})
        console.log("🚀 ~ MongoRepository ~ findUserById ~ user:", user)
        return user;
    }
    async findUserByEmail(email: string): Promise<any> {
        const user = await UserModel.findOne({email})        
        return user;
    }
    async registerUser(userIn: UserEntity): Promise<any> {
        const user = await UserModel.create(userIn)
        return user;
    }
    async listUser(): Promise<any> {
        const user = await UserModel.find()
        return user;
    }    
}