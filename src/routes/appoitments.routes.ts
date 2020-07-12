import { Router } from 'express';
import { uuid } from 'uuidv4';
import { startOfHour, parseISO, isEqual } from 'date-fns';

const appoitmentsRouter = Router();

interface Appoitment {
  id: string;
  provider: string;
  date: Date;
}

const appoitments: Appoitment[] = [];

appoitmentsRouter.post('/', (request, respose) => {
  const { provider, date } = request.body;

  const parseDate = startOfHour(parseISO(date));
  const findAppointmentInSameDate = appoitments.find(appoitment =>
    isEqual(parseDate, appoitment.date),
  );

  if (findAppointmentInSameDate) {
    return respose
      .status(400)
      .json({ message: 'This appointment is already booked' });
  }

  const appoitment = {
    id: uuid(),
    provider,
    date: parseDate,
  };

  appoitments.push(appoitment);
  return respose.json(appoitment);
});

export default appoitmentsRouter;
