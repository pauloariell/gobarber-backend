import { Router } from 'express';
import { startOfHour, parseISO } from 'date-fns';

import AppointmentsRepository from '../repositories/AppointmentsRepository';

const appointmentsRouter = Router();
const appointmentsRepository = new AppointmentsRepository();

//SoC: Separetion of Concerns (Separação de preocupações);
appointmentsRouter.get('/', (request, response)=> {
  const appointments = appointmentsRepository.all();

  return response.json(appointments);
})

appointmentsRouter.post('/', (request, respose) => {
  const { provider, date } = request.body;

  const parseDate = startOfHour(parseISO(date));
  const findAppointmentInSameDate = appointmentsRepository.findByDate(
    parseDate,
  );

  if (findAppointmentInSameDate) {
    return respose
      .status(400)
      .json({ message: 'This appointment is already booked' });
  }

  const appointment = appointmentsRepository.create(provider, parseDate);

  return respose.json(appointment);
});

export default appointmentsRouter;
