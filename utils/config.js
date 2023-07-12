require("dotenv").config();

const config = {
  dbUrl: process.env.DB_URL,
  port: process.env.PORT || 3003,
};

module.exports = config;
