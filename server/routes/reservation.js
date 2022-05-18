import { reserveTableValidator } from '../validators/reservation.js';
import { createReservation } from '../controllers/reservation.js';
import Router from 'express';
const router = new Router();

router.post('/reserve-table', reserveTableValidator, createReservation);

router.delete('/cancel-reservation',)

export default router;