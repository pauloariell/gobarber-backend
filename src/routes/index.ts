import { Router } from 'express';
import appointmentsRouter from './appointments.routes';

const routes = Router();

/**
 * Passa a resposabilidade do Routes para o appoitmentsRouter
 * Dessa forma ele só ve o caminho e passa para Appoitments
 * Com isso o appoitments fica resposável por olhar a verbo(post dele)
 */
routes.use('/appoitments', appointmentsRouter);

export default routes;
