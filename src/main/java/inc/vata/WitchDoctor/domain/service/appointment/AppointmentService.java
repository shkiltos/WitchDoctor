package inc.vata.WitchDoctor.domain.service.appointment;

import inc.vata.WitchDoctor.data.appointment.AppointmentModel;
import inc.vata.WitchDoctor.data.appointment.AppointmentRepository;
import inc.vata.WitchDoctor.domain.service.Regions;
import inc.vata.WitchDoctor.domain.service.RoutingServiceImpl;
import lombok.RequiredArgsConstructor;
import org.json.JSONObject;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
@RequiredArgsConstructor(onConstructor_ = {@Autowired})
public class AppointmentService {

    private final AppointmentRepository appointmentRepository;

    private final RoutingServiceImpl routingService;

    public AppointmentModel createAppointment(AppointmentModel appointmentModel) {
        appointmentModel.setRegion(Regions.getRegion(appointmentModel));
        JSONObject location = this.routingService.geocodeAddress(
                "г. Иваново, " + appointmentModel.getStreet() + ", " + appointmentModel.getHouse());
        appointmentModel.setLat(location.getString("lat"));
        appointmentModel.setLng(location.getString("lng"));
        return this.appointmentRepository.save(appointmentModel);
    }
}
