//config development access db
import {Sequelize} from "sequelize";

const sequelize = new Sequelize({
    dialect:"mysql",
    host:"localhost",
    database:"databsename",
    username:"root",
    password:"",
});

export default sequelize;