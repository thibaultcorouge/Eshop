//config development access db
import {Sequelize} from "sequelize";
import dotenv from 'dotenv';

dotenv.config();

const sequelize = new Sequelize({
    dialect:"mysql",
    host:"localhost",
    port: 3306,
    database:`${process.env.DB_NAME}`,
    username:`${process.env.DB_USERNAME}`,
    password:`${process.env.DB_PASSWORD}`,
});

export default sequelize;