import { uuid } from "../../helpers/uuid.helper";
import { UserEntity } from "./user.entity";


export class UserValue implements UserEntity {
  uuid: string;
  name: string;
  email: string;
  password: string;
  description: string;

  
  constructor({ name, email, password, description }: { name: string; email: string,password:string, description?:string }) {
    this.uuid = uuid();
    this.name = name;
    this.email = email;
    this.password = password;    
    this.description = description  ?? "default";
  }
}
