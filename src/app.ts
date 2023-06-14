import "dotenv/config";
import express from "express";
import cors from "cors";
import { router } from "./routes";
import connectToDatabase from "./config/mongo";

const PORT = process.env.PORT || 3001;
const app = express();

app.use(express.static('public'));
app.use(cors());
app.use(express.json());
app.use(router);
connectToDatabase().then(() => {
    console.log("Connected to database");
}).catch((error) => {
    console.log("Error connecting to database", error);
});

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});