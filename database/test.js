// Include Sequelize module.
import Sequelize from 'sequelize';
import { db } from '../db.js';

// 2nd - columns inside the table
export const Parking = db.define('parking', {

    parking_id:{

        // Sequelize module has INTEGER Data_Type.
        type:Sequelize.INTEGER,

        // To increment parking_id automatically.
        autoIncrement:true,

        // parking_id can not be null.
        allowNull:false,

        // For uniquely identify parking.
        primaryKey:true
    },

    name: { type: Sequelize.STRING, allowNull:false },

    address: { type: Sequelize.STRING, allowNull:false },

    com_name: { type: Sequelize.STRING, allowNull:false },

    latitude: { type: Sequelize.FLOAT, allowNull:false },

    longitude: { type: Sequelize.FLOAT, allowNull:false },

    // cost_2h: { type: Sequelize.INTEGER, allowNull:false },
    //
    // cost_3h: { type: Sequelize.INTEGER, allowNull:false },
    //
    // cost_4h: { type: Sequelize.INTEGER, allowNull:false },

    free: { type: Sequelize.INTEGER, allowNull:false },

    total: { type: Sequelize.INTEGER, allowNull:false },

    number_used: { type: Sequelize.INTEGER, allowNull:false },

    status: { type: Sequelize.STRING, allowNull:false },

    date: { type: Sequelize.DATE, allowNull:false },

    hours: { type: Sequelize.STRING, allowNull: false },

    month: { type: Sequelize.STRING, allowNull: false },

    day: { type: Sequelize.STRING, allowNull: false },
});
await Parking.sync({ force: false });