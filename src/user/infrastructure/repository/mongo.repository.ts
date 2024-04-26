/**
 * Infra! Mongo 🙌
 */
import { UserEntity } from "../../domain/user.entity"; //corregir
import { UserRepository } from "../../domain/user.repository"; //corregir
import UserModel from "../model/user.shchema";
/**
 * Mongo!
 */
export class MongoRepository implements UserRepository {
  async findUserById(uuid: string): Promise<any> {
    try {
      const user = await UserModel.findOne({ _id: uuid });
      return user;
    } catch (error) {
      console.log("🚀 ~ MongoRepository ~ findUserById ~ error:", error);
    }
  }
  async findUserByEmail(email: string): Promise<any> {
    try {
      const user = await UserModel.findOne({ email });
      return user;
    } catch (error) {
      console.log("🚀 ~ MongoRepository ~ findUserByEmail ~ error:", error);
    }
  }
  async registerUser(userIn: UserEntity): Promise<any> {
    try {
      const user = await UserModel.create(userIn);
      return user;
    } catch (error) {
      console.log("🚀 ~ MongoRepository ~ registerUser ~ error:", error);
    }
  }
  async listUser(): Promise<any> {
    try {
      const user = await UserModel.find();
      return user;
    } catch (error) {
      console.log("🚀 ~ MongoRepository ~ listUser ~ error:", error);
    }
  }
}
