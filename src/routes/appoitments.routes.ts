import { Router } from 'express';
import { uuid } from 'uuidv4';

const appoitmentsRouter = Router();

const appoitments = [];

appoitmentsRouter.post('/', (request, respose) => {
  const { provider, date } = request.body;

  const appoitment = {
    id: uuid(),
    provider,
    date,
  };

  appoitments.push(appoitment);
  return respose.json(appoitment);
});

export default appoitmentsRouter;
