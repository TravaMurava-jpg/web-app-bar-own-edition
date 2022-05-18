import reservationRouter from './reservation.js';
import Router from 'express';
const router = new Router();


router.use('/reservation', reservationRouter);


export default router