// require('dotenv').config({path: './env'})  this is common js - making inconsistency we are using module js
import dotenv from 'dotenv';
import ConnectDB from "./db/index.js";

dotenv.config({
    path: '../env'
})



ConnectDB()
.then(()=>{
    app.listen(process.env.PORT || 8000, ()=>{
        console.log(`Server is running at PORT ${process.env.PORT}`)
    })
})
.catch((err)=>{
  console.log("MONGO DB CONNECTION FAILED !!!", err)
})























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

