const express = require("express")
const cors = require("cors")
const userData = require("../dummyData/userData")

const server = express()
server.use(express.json())
server.use(cors())

server.get("/", (req,res)=>{
    res.send(
        <h1>welcome to the API thunder dome!</h1>
    )
})

server.get("/api/users", (req,res)=>{
    res.json({message: "these are our wonderful users", data:userData})
})

server.post('/api/register', (req,res)=>{
    const newUser = req.body;
    if (!req.body.username || !req.body.password){
        res.status(400).json({message: "username and password needed"})
    }else{
        userData.push(newUser)
        res.status(201).json(newUser)
    }
})

server.post("/api/login", (req,res)=>{
    const auth = req.body
    const authenticated = userData.filter((user) =>{
        if(
            user.username === auth.username 
            &&
            user.password === auth.password
        ){
            return user
        }else{
            return false
        }
    })
    if (!authenticated[0]){
        console.log("authentication successful", authentication)
        res.status(200).json({message: `welcome back ${auth.username}`})
    }
})

server.use("*", (req,res)=>{
    res.status(404).json({message: "Error: not found"})
})

module.exports = server