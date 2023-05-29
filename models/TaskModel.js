import { Sequelize } from "sequelize";
import db from "../config/Database.js";

const { DataTypes } = Sequelize;

const Task = db.define('task',{
    id_task: {
        type: DataTypes.INTEGER(11),
        primaryKey: true,
        autoIncrement: true
    },
    id_waypoints: {
        type: DataTypes.INTEGER(11)
    },
    status: {
        type: DataTypes.INTEGER(11)
    },
    priority: {
        type: DataTypes.INTEGER(11)
    },
    package_code: {
        type: DataTypes.STRING(100)
    },
    createdAt: {
        type: DataTypes.DATE,
        allowNull: false,
        defaultValue: Sequelize.literal('CURRENT_TIMESTAMP')
    },
    launchedAt: {
        type: DataTypes.DATE,
        allowNull: true,
    },
    finishedAt: {
        type: DataTypes.DATE,
        allowNull: true,
    },

},{
    freezeTableName:true,
    timestamps: true
});

export default Task;
