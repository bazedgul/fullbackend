import mongoose from "mongoose";
import {DB_NAME}  from "../constants.js";

const ConnectDB = async ()=>{
try {
   const connectionInstance = await mongoose.connect(`${process.env.MONGODB_URL}/${DB_NAME}`)
   console.log(`\n MONGODB CONNECTED !! DB Host: ${connectionInstance.connection.host} `)
} catch (error) {
    console.error("MONGODB Connection Error", error)
    process.exit(1)
}
}

export default ConnectDB;