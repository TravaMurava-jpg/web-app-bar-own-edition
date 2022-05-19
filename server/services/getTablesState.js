import { Table, Reservation } from '../models/models.js'
import { Op } from 'sequelize'

export const getTablesStateForTheTime = async (checkInTime) => {
    const reservations = await Reservation.findAll({
        where: {
            checkInTime: {
                [Op.gt]: Number(checkInTime) - (2 * 3600 * 1000),
                [Op.lt]: Number(checkInTime) + (2 * 3600 * 1000),
            }
        }
    });

    const reservedIds =reservations.map(reservation => reservation.tableId);
    const reservedTables = await Table.findAll({
        where: {
            id: {
            [Op.in]: reservedIds,
        }
    }
    });

    const tables = await Table.findAll();
    const unreservedTables = tables.filter((table) => {
        return !reservedIds.includes(table.id);
    })

    unreservedTables.forEach((table) => {
        table.dataValues.reservedForRequestedTime = false;
    })
    reservedTables.forEach((table) => {
        table.dataValues.reservedForRequestedTime = true;
    })

    //console.log('____________________****************_', [...reservedTables, ...unreservedTables])

    return [...reservedTables, ...unreservedTables]
}
