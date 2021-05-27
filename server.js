const express = require("express");
const morgan = require("morgan");
const helmet = require("helmet");
const { join } = require("path");

const mongoose = require("mongoose");
const connectDB = require('./config/db');

const app = express();
connectDB();

const port = process.env.SERVER_PORT || 3000;

app.use(morgan("dev"));
app.use(helmet());
app.use(express.static(join(__dirname, "build")));



app.get('/', (req, res) => res.send('Hello world!'));

app.listen(port, () => console.log(`Server listening on port ${port}`));
