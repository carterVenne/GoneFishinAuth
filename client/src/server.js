const express = require("express");
const morgan = require("morgan");
const helmet = require("helmet");
const { join } = require("path");

const mongoose = require("mongoose");
require('dotenv').config()

const app = express();

const port = process.env.SERVER_PORT || 3000;

app.use(morgan("dev"));
app.use(helmet());
app.use(express.static(join(__dirname, "build")));

mongoose.connect(
    process.env.MONGODB_URL || 'mongodb://localhost/user',
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useCreateIndex: true,
      useFindAndModify: false
    }
  );

app.listen(port, () => console.log(`Server listening on port ${port}`));
