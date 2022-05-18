import {sequelize} from '../db.js'
import { DataTypes } from 'sequelize'


export const Reservation = sequelize.define('reservation', {
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    firstName: { type: DataTypes.STRING },
    phone: { type: DataTypes.STRING },
    createdAt: { type: DataTypes.DATE, defaultValue: new Date()},
    updatedAt: { type: DataTypes.DATE, defaultValue: new Date()}
})

export const Table = sequelize.define('table', {
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    reserved: { type: DataTypes.BOOLEAN, defaultValue: false },
    createdAt: { type: DataTypes.DATE, defaultValue: new Date()},
    updatedAt: { type: DataTypes.DATE, defaultValue: new Date()}
})



