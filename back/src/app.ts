//import require module
import express from "express";
import sequelize from "./config/db";
import bodyParser from "body-parser"


//initialize Express App
const app = express();
//specific headers of access control in order to avoid CORS error
app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content, Accept, Content-Type, Authorization');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH, OPTIONS');
    next();
});

// initialize Sequelize with the config.tsx file
(async () => {
    try {
        await sequelize.authenticate();
        console.log('Connection to database established successfully.');
  } catch (error) {
    console.error('Unable to connect to database:', error);
    process.exit(1);
  }
})();

app.use(bodyParser.json());

module.exports = app;