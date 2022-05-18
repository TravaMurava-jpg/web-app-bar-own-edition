import { serviceCreateReservation } from '../services/createReservation.js'
export const createReservation = async (req, res, next) => {
    const { firstName, phone, checkIn } = req.body
    const reservation = await serviceCreateReservation({ firstName, phone, checkIn, tableId: req.tableId })
    res.status('200').end()
}