import mongoose, { Mongoose } from 'mongoose'

const MONGODB_URL = process.env.MONGODB_URL;

interface MongooseConnection {
    conn: Mongoose | null
    promise: Promise<Mongoose> | null;
}

let cached: MongooseConnection = (global as any).mongoose;

if (!cached) {
    cached = (global as any).mongoose = {
        conn: null, promise: null
    }
}

export const connectToDatabase = async () => {
    // check if cached conn already exists and exit out if so
    if (cached.conn) return cached.conn;

    // check if URL is present 
    if (!MONGODB_URL) throw new Error('Missing MONGODB_URL');

    // create a new conn to mongodb if one doesn't exist
    cached.promise = cached.promise ||
    mongoose.connect(MONGODB_URL, {
        dbName: 'AImage', bufferCommands: false
    })

    cached.conn = await cached.promise;

    return cached.conn;
}