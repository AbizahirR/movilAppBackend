import "dotenv/config";
import { connect } from "mongoose";

async function connectToDatabase(): Promise<void> {
    const MONGO_URL = <string>process.env.DB_URI;

    if (!MONGO_URL) {
        throw new Error("MongoDB URL must be provided");
    }

    await connect(MONGO_URL);
}

export default connectToDatabase;