import { Schema, model } from "../../../helpers/mongoose.helper";

const SongSchema = new Schema(
  {
    uuid: {
      type: String,
      unique: true,
      required: true,
    },
    title: {
      type: String,
      required: true,
    },
    author: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    owner: {
      type: String,
      required: true,
    },
    public: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

SongSchema.set("toJSON", {
  transform: (_document, returnedObject) => {
    returnedObject.id = returnedObject._id.toString();
    delete returnedObject._id;
    delete returnedObject.__v;
    delete returnedObject.updatedAt;
    delete returnedObject.createdAt;
    delete returnedObject.uuid;
  },
});
// SongSchema.plugin(paginate);

const SongModel = model(process.env.MONGO_SONG_SCHEMA, SongSchema);

export default SongModel;