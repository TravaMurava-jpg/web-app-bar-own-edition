import { checkIfUnreservedTableExists } from '../services/checkIfUnreservedTableExists.js'
export const reserveTableValidator = (req, res, next) => {
    const { firstName, phone, checkInTime } = req.body;
    if (!firstName || !phone || !checkInTime) {
        res.status('400').json({ message: 'Сорри брат, сегодня без еды' })
        return 
    }
    const tableId = checkIfUnreservedTableExists() 
    if (!tableId){
        res.status('503').json({ message: 'Сорри брат, сегодня без еды' })
        return
    }
    
req.tableId = tableId
next()

}

export const cancelReservationValidator = (req, res, next) => {
    const { firstName, phone, checkInTime } = req.body;
    if (firstName || phone || checkInTime){
       json({ message: "Бронь отменена"})
    }
    res.tableId = tableId
}
