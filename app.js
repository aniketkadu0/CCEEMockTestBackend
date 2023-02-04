const express = require("express");
const morgan = require("morgan");

const app = express();
const userRoute = require("./routes/userRoute");
const bodyParser = require("body-parser");
const cors = require("cors");

morgan.token('id', function getId (req) {
    return req.id
  })

app.use(express.static('./public'));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cors());
app.use(morgan(':date :id :method :url :status :response-time :remote-addr'));
// app.use(morgan('dev'))

app.use("/user", userRoute);

module.exports = app;
