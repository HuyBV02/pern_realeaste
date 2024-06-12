const express = require("express");
const cors = require("cors");
const dbConn = require("./config/dbconnect");
require("dotenv").config();

const app = express();

app.use(
    cors({
        origin: process.env.CLIENT_URL,
        credentials: true,
        methods: ["GET", "POST", "PUT", "DELETE"],
        allowedHeaders: [
            "Content-Type",
            "Authorization",
            "X-Requested-With",
            "Origin",
            "Accept",
            "Access-Control-Allow-Origin",
        ],
        exposedHeaders: [
            "Content-Type",
            "Authorization",
            "X-Requested-With",
            "Origin",
            "Accept",
            "Access-Control-Allow-Origin",
        ],
        preflightContinue: false,
        optionsSuccessStatus: 204,
    })
);

app.use(express.json());

app.use(express.urlencoded({ extended: true }));

dbConn();

const port = process.env.PORT || 3000;

app.listen(port, () => {
    console.log(`:::::::::::::Server is running on port ${port}:::::::::::::`);
});
