import {sequelize} from '../db.js'
import { DataTypes } from 'sequelize'


export const Reservation = sequelize.define('reservation', {
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    firstName: { type: DataTypes.STRING },
    phone: { type: DataTypes.STRING },
    checkInTime: { type: DataTypes.INTEGER },
    createdAt: { type: DataTypes.DATE, defaultValue: new Date()},
    updatedAt: { type: DataTypes.DATE, defaultValue: new Date()},
    tableId: {type: DataTypes.INTEGER, foreignKey: true}
})

export const Table = sequelize.define('table', {
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    createdAt: { type: DataTypes.DATE, defaultValue: new Date()},
    updatedAt: { type: DataTypes.DATE, defaultValue: new Date()}
})



