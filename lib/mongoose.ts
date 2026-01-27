import mongoose, { Mongoose } from "mongoose";
import logger from "./logger";

const MONGODB_URI = process.env.DB_URI as string;

if (!MONGODB_URI) throw new Error("MONGODB_URI is not defined");

interface MongooseCache {
  conn: Mongoose | null;
  promise: Promise<Mongoose> | null;
}

declare global {
  var mongoose: MongooseCache;
}

let cached = global.mongoose;

if (!cached) cached = global.mongoose = { conn: null, promise: null };

const dbConnect = async (): Promise<Mongoose> => {
  if (cached.conn) {
    logger.info("Using existing mongoose connection");
    return cached.conn;
  }
  if (!cached.promise) {
    cached.promise = mongoose
      .connect(MONGODB_URI, {
        dbName: "AgoraDev",
      })
      .then((result) => {
        logger.info("Connect to MongoDB");
        return result;
      })
      .catch((e) => {
        logger.error("Error connecting to MongoDB", e);
        throw e;
      });
  }

  cached.conn = await cached.promise;
  return cached.conn;
};

export default dbConnect;
