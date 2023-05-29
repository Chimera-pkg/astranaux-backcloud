import { Sequelize } from "sequelize";
import db from "../config/Database.js";

const { DataTypes } = Sequelize;

const Waypoints = db.define('waypoints',{
    id:{
        type: DataTypes.INTEGER(11),
	primaryKey: true,
	autoIncrement: true
    },
    name:{
        type: DataTypes.STRING(100)
    },
    code:{
        type: DataTypes.STRING(100)
    },
    latitude:{
        type: DataTypes.STRING(255)
    },
    longitude:{
        type: DataTypes.STRING(255)
    },
    altitude:{
        type: DataTypes.INTEGER(11)
    },
    timestamp: {
        type: DataTypes.DATE,
        allowNull: false,
        defaultValue: Sequelize.literal('CURRENT_TIMESTAMP')
    },
    status: {
	type: DataTypes.INTEGER(11)
    }
},{
    freezeTableName:true,
    timestamps: false
});

export default Waypoints;
