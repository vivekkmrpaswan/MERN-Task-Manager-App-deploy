const express = require('express');
const app = express();
require('dotenv').config();
require('./Models/db');
const PORT = process.env.PORT || 8080;

const TaskRouter = require('./Routes/TaskRouter.js');
const bodyParser = require('body-parser');
const cors = require('cors');

// ✅ CORS fix
app.use(cors({
    origin: "https://stately-cucurucho-c59ab1.netlify.app",
    methods: ["GET", "POST", "PUT", "DELETE"],
    credentials: true,
}));

app.get("/", (req, res) => {
    res.send("Hello");
});

app.use(bodyParser.json()); // allows JSON body from client side
app.use('/tasks', TaskRouter);

app.listen(PORT, () => {
    console.log(`Server is running on PORT:${PORT}`);
});
