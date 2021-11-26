package inc.vata.WitchDoctor.web.api;

import io.swagger.annotations.ApiOperation;
import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping(
        path = "${witchdoctor.api.prefix:}" + "/v1/",
        produces = MediaType.APPLICATION_JSON_VALUE
)
public class WitchDoctorController {

    @GetMapping
    @ApiOperation("hello")
    public String getHelloWorld() {
        return "Hello world";
    }

//    @GetMapping
//    public AppointmentModel getMapRoutes() {
//
//    }
}
