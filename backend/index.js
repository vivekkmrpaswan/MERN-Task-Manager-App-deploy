const express = require('express');
const app = express();

require('dotenv').config();
require('./Models/db');

const PORT = process.env.PORT || 8080;


const TaskRouter = require('./Routes/TaskRouter.js');
const bodyParser = require('body-parser');

const cors = require('cors')
app.get("/", (req,res)=>{
    res.send("Hello")
})

app.use(cors())
app.use(bodyParser.json());//allows json body from client side
app.use('/tasks',TaskRouter)

app.listen(PORT,()=>{
    console.log(`Server is running on PORT:${PORT}`)
})