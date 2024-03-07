// require('dotenv').config({path: './env'})  this is common js - making inconsistency we are using module js
import dotenv from 'dotenv';
import ConnectDB from "./db/index.js";

dotenv.config({
    path: '../env'
})



ConnectDB()























// first Method 
// import express from "express";
// const app = express();

// (async ()=>{
//     try {
//        await mongoose.connect(`${process.env.MONGODB_URL}/${DB_NAME}`)
//        app.on("error",(error)=>{
//         console.log("Error with express", error);
//         throw error
//        })
//        app.listen(process.env.PORT, ()=>{
//         console.log(`App listening on Port ${process.env.PORT}`)
//        })
//     } catch (error) {
//         console.error("Error :", error)
//         throw error
//     }
// })()

