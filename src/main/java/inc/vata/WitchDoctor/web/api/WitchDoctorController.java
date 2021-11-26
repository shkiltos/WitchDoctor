package inc.vata.WitchDoctor.web.api;

import inc.vata.WitchDoctor.data.appointment.AppointmentModel;
import inc.vata.WitchDoctor.domain.service.witch_doctor.WitchDoctorService;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping(
        path = "${witchdoctor.api.prefix:}" + "/v1/",
        produces = MediaType.APPLICATION_JSON_VALUE
)
@RequiredArgsConstructor(onConstructor_ = {@Autowired})
public class WitchDoctorController {

    WitchDoctorService witchDoctorService;

    @GetMapping
    public List<AppointmentModel> getAppointments(String region) {
        return this.witchDoctorService.getAppointmentModels(region);
    }
}
