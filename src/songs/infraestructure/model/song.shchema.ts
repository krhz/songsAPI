import { Schema, model } from "mongoose";

const SongSchema = new Schema(
  {
    uuid:{
      type:String,
      unique:true,
      required:true
    },
    title:{
      type:String,
      required:true
    },
    author:{
      type:String,
      required:true
    },
    description:{
      type:String,
      required:true
    },
    owner:{
      type:String,
      required:true
    },
    public:{
      type:String,
      required:true 
    },
  },
  {
    timestamps: true,
  }
);


const SongModel = model(process.env.MONGO_SONG_SCHEMA, SongSchema)

export default SongModel
