//import require module
import express from "express";
import sequelize from "./config/db";
import bodyParser from "body-parser"
import cors from "cors";



//initialize Express App
const app = express();
app.use(cors());
//specific headers of access control in order to avoid CORS error
app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content, Accept, Content-Type, Authorization');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH, OPTIONS');
    next();
});
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true}));

app.get("/", (req, res) => {//
    res.json({message: "itworks1"});//test
});//

// initialize Sequelize with the config.ts file
(async () => {
    try {
        await sequelize.authenticate();
        console.log('Connection to database established successfully.');
  } catch (error) {
    console.error('Unable to connect to database:', error);
    process.exit(1);
  }
})();


module.exports = app;