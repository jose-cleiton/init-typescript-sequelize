"use strict";
require("dotenv/config");
const config = {
    username: process.env.DB_USER,
    password: process.env.DB_PASS,
    database: process.env.DB_DATABASE,
    host: process.env.DB_HOST || 'localhost',
    port: Number(process.env.DB_PORT),
    dialect: 'mysql',
};
module.exports = config;
