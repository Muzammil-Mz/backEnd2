import mongoose from "mongoose"
import config from "config"

async function dbConnect(params) {
    try {
        let db=config.get("URL")
        await mongoose.connect(db)
        console.log("db connected successfully");
    } catch (error) {
        console.log(error);
    }
}
dbConnect()