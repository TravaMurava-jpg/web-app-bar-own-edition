import { getTablesStateForTheTime } from '../services/getTablesState.js'
export const reserveTableValidator = (req, res, next) => {
    const { firstName, phone, checkInTime, tableId } = req.body;
    if (!firstName || !phone || !checkInTime || !tableId) {
        res.status('400').json({ message: 'Сорри брат, сегодня без еды' })
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
