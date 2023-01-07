
const express = require('express')
const socketIo = require('socket.io')
const path = require('path')
const http = require('http')
const config = require('dotenv').config();

// const {setRules,deleteRules,getRules,streamTweets} = require('../streamTweets')
const {fameTweets, replyToTweet} = require('../timelimeTweets')
// const {replyToTweet} = require('../replyTweet')

// setting server
const PORT = process.env.PORT || 8080;
const app = express()
const server = http.createServer(app)
const io = socketIo(server)

app.use('/',(req,res)=>{
    res.sendFile(path.resolve(__dirname,'../','client','index.html'))
})


io.on('connection', async (socket)=>{
    console.log('client connected...');
    socket.on('reply',(id)=>{
        console.log(id)
        let resp;
        try{
            resp = replyToTweet(id,io)
        }catch(err){
            console.log(err)
            resp = "error while replying"
        }
        resp.then(data =>{
            console.log("data",data, id)
            io.emit("replied", {data,id})
        })
    })
    
    fameTweets(io)
})

// sendToWhatsapp({"text":"Another trial"})
server.listen(PORT, ()=> console.log('listening on port', PORT))

