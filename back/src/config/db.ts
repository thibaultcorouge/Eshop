//config development access db
import {Sequelize} from "sequelize";
import "dotenv/config"

const sequelize = new Sequelize({
    dialect:"mysql",
    host:"localhost",
    database:`${process.env.DB_NAME}`,
    username:`${process.env.DB_USERNAME}`,
    password:`${process.env.DB_PASSWORD}`,
});

export default sequelize;