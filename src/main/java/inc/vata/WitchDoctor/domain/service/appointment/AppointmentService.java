package inc.vata.WitchDoctor.domain.service.appointment;

import inc.vata.WitchDoctor.data.appointment.AppointmentModel;
import inc.vata.WitchDoctor.data.appointment.AppointmentRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
@RequiredArgsConstructor(onConstructor_ = {@Autowired})
public class AppointmentService {

    private final AppointmentRepository appointmentRepository;

    public AppointmentModel createAppointment(AppointmentModel appointmentModel) {
        return this.appointmentRepository.save(appointmentModel);
    }
}
