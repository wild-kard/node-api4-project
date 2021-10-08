const dotenv = require("dotenv").config()

const { port } = require("./config");

const app = require("./api/server.js")



app.listen(port,()=>{
    console.log(`server alive on port ${port}`)
})
