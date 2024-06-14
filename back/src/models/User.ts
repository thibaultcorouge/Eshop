import {DataTypes, Model} from 'sequelize';
import sequelize from '../config/db';

class User extends Model {
    public id!: number;
    public username!: string;
    public email!: string;
    public password!: string;
    public firstname!: string;
    public lastname!: string;
    public readonly createdAt!: Date;
    public readonly updateAt!: Date;
}

User.init(
    {
        id: {
            type: DataTypes.INTEGER.UNSIGNED,
            autoIncrement: true,
            primaryKey: true,
        },
        username: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true,
        },
        email: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true,
        },
        password: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        firstName: {
            type: DataTypes.STRING,
        },
        lastName: {
            type: DataTypes.STRING,
        },
    },
    {
        sequelize,
        tableName: 'Users',
        modelName: 'User',
        timestamps: true,
    }
);


export default User;