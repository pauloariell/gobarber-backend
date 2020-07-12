import Appointment from '../models/Appointment';
import { isEqual } from 'date-fns';

class AppointmentsRepository {
  private appointments: Appointment[];

  constructor(){
    this.appointments = [];
  }

  public create(provide: string, date: Date): Appointment{
    const appointment = new Appointment(provide, date);

    this.appointments.push(appointment);

    return appointment;
  }

  public findByDate(date:Date): Appointment | null {
    const findAppointment = this.appointments.find(appointment =>
      isEqual(date, appointment.date),
    );

    return findAppointment || null;
  }
}

export default AppointmentsRepository;
