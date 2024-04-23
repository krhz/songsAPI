import { Schema, model } from "mongoose";

const SongSchema = new Schema(
  {
    author: {
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
    description: {
      type: String,
    },
  },
  {
    timestamps: true,
  }
);

const SongModel = model(process.env.MONGO_SONG_SCHEMA, SongSchema)

export default SongModel
