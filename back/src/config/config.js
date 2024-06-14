require('dotenv').config();

// console.log("DB_USERNAME", process.env.DB_USERNAME);
// console.log("DB_PASSWORD", process.env.DB_PASSWORD);
// console.log("DB_NAME", process.env.DB_NAME);

module.exports = {
  development: {
    username: process.env.DB_USERNAME,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
    host: "localhost",
    port: 3306,
    dialect: 'mysql',
    // dialectOptions: {
    //   bigNumberStrings: true,
    // },
  },
  test:{
    username: process.env.DB_USERNAME,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
    host: "localhost",
    port: 3306,
    dialect: 'mysql',
    // dialectOptions: {
    //   bigNumberStrings: true,
    // },
  },
  production:{
    username: process.env.DB_USERNAME,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
    host: "localhost",
    port: 3306,
    dialect: 'mysql',
    // dialectOptions: {
    //   bigNumberStrings: true,
    // },
  }
};