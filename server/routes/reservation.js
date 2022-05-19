import { reserveTableValidator } from '../validators/reservation.js';
import { createReservation, getTablesStateForTheTime } from '../controllers/reservation.js';
import Router from 'express';

const router = new Router();

router.post('/reserve-table', reserveTableValidator, createReservation); // получаем id стола в базе данных. По нему бронируем.

router.get('/tables-state', getTablesStateForTheTime ) // получим время, по нему вернем норм столы.
router.delete('/cancel-reservation',)

export default router;