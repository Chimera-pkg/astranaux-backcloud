import { Sequelize } from "sequelize";
import db from "../config/Database.js";

const { DataTypes } = Sequelize;

const Speed = db.define('conn_speed',{
    ping_ms: {
        type: DataTypes.FLOAT,
    },
    testfrom: {
        type: DataTypes.STRING(100)
    },
    host: {
        type: DataTypes.STRING(100)
    },
    up_mbps: {
        type: DataTypes.FLOAT
    },
    down_mbps: {
        type: DataTypes.FLOAT
    },
    timestamp: {
        type: DataTypes.DATE,
        allowNull: false,
        defaultValue: Sequelize.literal('CURRENT_TIMESTAMP')
    },
},{
    freezeTableName:true,
    timestamps: false
});

export default Speed;
