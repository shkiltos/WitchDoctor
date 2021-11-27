package inc.vata.WitchDoctor.domain.service.witch_doctor;

import inc.vata.WitchDoctor.data.appointment.AppointmentModel;
import inc.vata.WitchDoctor.data.appointment.AppointmentRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Date;
import java.util.List;
import java.util.stream.Collectors;

@Service
@RequiredArgsConstructor(onConstructor_ = {@Autowired})
public class WitchDoctorService {

    private final AppointmentRepository appointmentRepository;

    public List<AppointmentModel> getAppointmentModels(String region) {

        List<AppointmentModel> appointmentModels = this.appointmentRepository.findAll();
        return appointmentModels.stream()
                .filter(appointmentModel -> !appointmentModel.getDone())
                .filter(appointmentModel -> appointmentModel.getRegion().equals(region))
                .filter(appointmentModel -> {
                    Date today = new Date();
                    Date arrivalDate = appointmentModel.getArrivalDate();
                    if (today.getYear() == arrivalDate.getYear()) {
                        if (today.getMonth() == arrivalDate.getMonth()) {
                            if (today.getDay() == arrivalDate.getDay()) {
                                return true;
                            }
                        }
                    }
                    return false;
                })
                .collect(Collectors.toList());
    }
}
