import { Router } from 'express';
import { parseISO } from 'date-fns';
import { getCustomRepository } from 'typeorm';

import AppointmentsRepository from '../repositories/AppointmentsRepository';
import CreateAppointmentService from '../services/CreateAppointmentService';

const appointmentsRouter = Router();

// SoC: Separetion of Concerns (Separação de preocupações);
appointmentsRouter.get('/', async (request, response) => {
  const appointmentsRepository = getCustomRepository(AppointmentsRepository);
  const appointments = await appointmentsRepository.find();

  return response.json(appointments);
});

appointmentsRouter.post('/', async (request, respose) => {
  try {
    const { provider_id, date } = request.body;
    const parseDate = parseISO(date);

    const createAppointmentService = new CreateAppointmentService();
    const appointment = await createAppointmentService.execute({
      provider_id,
      date: parseDate,
    });
    return respose.json(appointment);
  } catch (err) {
    return respose.status(400).json({ error: err.message });
  }
});

export default appointmentsRouter;
