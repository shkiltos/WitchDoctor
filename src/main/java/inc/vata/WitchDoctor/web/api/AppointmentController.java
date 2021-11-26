package inc.vata.WitchDoctor.web.api;

import inc.vata.WitchDoctor.data.appointment.AppointmentModel;
import inc.vata.WitchDoctor.domain.service.appointment.AppointmentService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping(
        path = "${witchdoctor.api.prefix:}" + "/v1/appointment",
        consumes = MediaType.APPLICATION_JSON_VALUE,
        produces = MediaType.APPLICATION_JSON_VALUE)
@RequiredArgsConstructor
public class AppointmentController {

    private final AppointmentService appointmentService;

    @PostMapping
    public AppointmentModel createRecord(@RequestBody AppointmentModel appointmentModel) {
        return this.appointmentService.createAppointment(appointmentModel);
    }


}
