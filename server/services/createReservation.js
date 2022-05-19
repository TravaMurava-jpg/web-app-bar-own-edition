import { Reservation, Table} from '../models/models.js'
export const serviceCreateReservation = async ({ firstName, phone, checkInTime, tableId}) => {
    const reservation = await Reservation.create({ firstName, phone, checkInTime, tableId })

    return reservation
}
