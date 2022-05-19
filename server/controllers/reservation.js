import { serviceCreateReservation } from '../services/createReservation.js'
import { getTablesStateForTheTime as getTablesState } from "../services/getTablesState.js";

export const createReservation = async (req, res, next) => {
    const { firstName, phone, checkInTime, tableId } = req.body
    const reservation = await serviceCreateReservation({ firstName, phone, checkInTime, tableId })
    res.status('200').json({ reservation });
}
export const getTablesStateForTheTime = async (req, res, next) => {
    const { checkInTime } = req.query;
    const tables = await getTablesState(checkInTime);
    console.log('ssssssssssssssssssssssssss!!!!!!!!!!!!!!!!!!!!!!!!!!!$#@$$', tables);
    res.status('200').json({ tables });
}