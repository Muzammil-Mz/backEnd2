import express from "express"
import config from "config"
import "./utils/dBconnect.js"
import userRouter from "./controllers/users/index.js"

const app=express()
const port=config.get("PORT")
app.use(express.json())




app.get("/",(req,res)=>{
    try {
        console.log("Home hellow world");
        res.status(200).json("Hello World")
    } catch (error) {
        console.log(error);
    }
})


app.use("/api/users",userRouter)

app.listen(port,()=>{
    console.log(`server is up and listening`);
})