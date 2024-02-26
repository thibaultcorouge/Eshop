//import require module
import express from "express";
import sequelize from "./config/db";

//initialize Express App
const app = express();


//initialize Sequelize with the config.tsx file
(async () => {
    try {
        await sequelize.authenticate();
        console.log('Connection to database established successfully.');
  } catch (error) {
    console.error('Unable to connect to database:', error);
    process.exit(1);
  }
})();

app.listen(3000);