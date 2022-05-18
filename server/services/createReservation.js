import { Reservation, Table} from '../models/models.js'
export const serviceCreateReservation = async ({ firstName, phone, checkIn, tableId}) => {
    const reservation = await Reservation.create({ firstName, phone, checkIn })
    const table = await Table.findOne({id: tableId})
    table.reserved = true
    table.save()
    return reservation
}
