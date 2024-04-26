import { connect } from "mongoose";

const DB_URI = `${process.env.DB_URI}`;

const dbInit = async () => {
  try {
    console.log("conmectrade");
    await connect(DB_URI);
  } catch (error) {
    return error;
  }
};

export default dbInit;
