
const express = require('express');
const tasks = require('./routes/tasks')
const connectDB = require("./db/connect")
require('dotenv').config();//hiding important key values from the user using the dotenv module


const PORT = process.env.PORT || 8000 //port

const app = express();


app.use(express.json());//body to json converter
app.use('/api/v1/tasks',tasks)//routes middleware
app.use(express.static('./public')); //serving a static file

//routes
// app.get('/',(req,res)=>{
//     res.send("The task manager API");
// })

//first checking if the database is properly setup before spinning up the server to listen
const start = async ()=>{
    try {
        await connectDB(process.env.MONGO_URL);
        console.log("CONNECTED TO db...")
        app.listen(PORT,(err)=>{
            if(err){
                console.log(err);
                return;
            }
            else{
                console.log(`server listening on port ${PORT}...`);
            }
        
        })
    } catch (error) {
        console.log(error)
        return;
    }
}

start();

