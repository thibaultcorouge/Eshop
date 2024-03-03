import fs from "fs";
import path from "path";
import {Sequelize, Model, DataTypes } from "sequelize";
import sequelize from "../config/db"

const basename = path.basename(__filename);
const db: any = {};


fs
  .readdirSync(__dirname)
  .filter((file: string) => {
    return (file.indexOf('.') !== 0) && (file !== basename) && (file.slice(-3) === '.ts');
  })
  .forEach((file: string) => {
    const model = require(path.join(__dirname, file))(sequelize, DataTypes);
    db[model.name] = model;
  });

Object.keys(db).forEach(modelName => {
  if (db[modelName].associate) {
    db[modelName].associate(db);
  }
});



export default db;
