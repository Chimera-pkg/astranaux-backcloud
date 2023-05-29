import { Sequelize } from "sequelize";

const db = new Sequelize('5g_logistic_drone','xcamp','A[d]m1n12345678*',{
    host: '34.101.102.64',
    dialect: 'mysql',
    port: 3306,
    timezone: '+07:00'
})

export default db;
