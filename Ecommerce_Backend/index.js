const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const connect = require("./connect");
const userModel = require("./Modules/User.Module")

const PORT = 8080;

const server = express();

server.use(cors());
server.use(express.urlencoded({extended:true}));
server.use(express.json());


server.use("/signup",async(req,res)=>{
    const {username, password} = req.body
    const user = new userModel({username, password});
    await user.save()
    res.send("user created sucessafully");
    
})

server.listen(PORT,async()=>{
    await connect()
    console.log("server working successfully")
})