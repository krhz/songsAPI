import { Schema, model } from "mongoose";

const UserSchema = new Schema(
  {
    name: {
      type: String,
    },
    email: {
      type: String,      
      required: true,
      unique: true,     
    },
    uuid: {
      type: String,
      unique: true,
    },
    password: {
      type: String,
      required:true
    },
    description: {
      type: String,
    },
  },
  {
    timestamps: true,
  }
);

UserSchema.set('toJSON', {
  transform: (_document, returnedObject) => {
    returnedObject.id = returnedObject._id.toString()
    delete returnedObject._id
    delete returnedObject.__v    
    delete returnedObject.password
  }
})

const UserModel = model(process.env.MONGO_USER_SCHEMA, UserSchema)

export default UserModel
