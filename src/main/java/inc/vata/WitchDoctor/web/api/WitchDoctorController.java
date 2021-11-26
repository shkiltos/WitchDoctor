package inc.vata.WitchDoctor.web.api;

import inc.vata.WitchDoctor.data.appointment.AppointmentRepository;
import io.swagger.annotations.ApiOperation;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping(
        path = "${witchdoctor.api.prefix:}" + "/v1/",
        produces = MediaType.APPLICATION_JSON_VALUE
)
@RequiredArgsConstructor(onConstructor_ = {@Autowired})
public class WitchDoctorController {

    AppointmentRepository appointmentRepository;

    @GetMapping
    @ApiOperation("hello")
    public String getHelloWorld() {
        return "Hello world";
    }

//    @GetMapping
//    public List<AppointmentModel> getAppointments(String phone) {
//        return this.appointmentRepository.findById(phone);
//    }
}
