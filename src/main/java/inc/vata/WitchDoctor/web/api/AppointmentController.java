package inc.vata.WitchDoctor.web.api;

import inc.vata.WitchDoctor.data.appointment.AppointmentModel;
import inc.vata.WitchDoctor.data.appointment.AppointmentRepository;
import inc.vata.WitchDoctor.domain.service.appointment.AppointmentService;
import inc.vata.WitchDoctor.domain.service.witch_doctor.WitchDoctorService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PatchMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

@RestController
@RequestMapping(
        path = "${witchdoctor.api.prefix:}" + "/v1/appointment",
        consumes = MediaType.APPLICATION_JSON_VALUE,
        produces = MediaType.APPLICATION_JSON_VALUE)
@RequiredArgsConstructor
public class AppointmentController {

    private final AppointmentService appointmentService;

    private final WitchDoctorService witchDoctorService;

    private final AppointmentRepository appointmentRepository;

    @PostMapping
    public AppointmentModel createRecord(@RequestBody AppointmentModel appointmentModel) {
        return this.appointmentService.createAppointment(appointmentModel);
    }

    @GetMapping("setGeo")
    public HttpStatus updateRecord(
            @RequestParam String region,
            @RequestParam String lat,
            @RequestParam String lng) {
        List<AppointmentModel> appointmentModels =this.witchDoctorService.getAppointmentModels(region);

        appointmentModels
            .forEach(appointmentModel -> {
                appointmentModel.setDocLat(lat);
                appointmentModel.setDocLng(lng);
                this.appointmentRepository.save(appointmentModel);
            });

        return HttpStatus.OK;
    }

    @GetMapping("getGeo")
    public Map<String, String> getGeo(@RequestParam Integer id) {
        AppointmentModel appointmentModel = this.appointmentRepository.findById(id).get();
        Map<String, String> result = new HashMap<>();
        result.put("lat", appointmentModel.getDocLat());
        result.put("lng", appointmentModel.getDocLng());
        return result;
    }
}
