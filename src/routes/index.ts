import { Router } from 'express';

import usersRouter from './users.routes';
import sessionsRouter from './sessions.routes';
import appointmentsRouter from './appointments.routes';

const routes = Router();

/**
 * Passa a resposabilidade do Routes para o appoitmentsRouter
 * Dessa forma ele só ve o caminho e passa para Appoitments
 * Com isso o appoitments fica resposável por olhar a verbo(post dele)
 */
routes.use('/sessions', sessionsRouter);
routes.use('/users', usersRouter);
routes.use('/appointments', appointmentsRouter);

export default routes;
