import { Reservation, Table} from '../models/models.js'
export const serviceCancelReservation = async ({ firstName, phone, checkIn, tableId}) => {
       const reservation = await Reservation.remove
       return reservation
}