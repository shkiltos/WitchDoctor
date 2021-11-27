package inc.vata.WitchDoctor.web.api;

import com.google.maps.errors.ApiException;
import com.google.maps.model.GeocodedWaypoint;
import com.google.maps.model.LatLng;
import inc.vata.WitchDoctor.data.appointment.AppointmentModel;
import inc.vata.WitchDoctor.domain.service.GeoService;
import inc.vata.WitchDoctor.domain.service.witch_doctor.WitchDoctorService;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.*;

import java.io.IOException;
import java.util.List;

@RestController
@RequestMapping(
        path = "${witchdoctor.api.prefix:}" + "/v1",
        produces = MediaType.APPLICATION_JSON_VALUE
)
@RequiredArgsConstructor(onConstructor_ = {@Autowired})
public class WitchDoctorController {

    private final WitchDoctorService witchDoctorService;

    private final GeoService geoService;

    @GetMapping(path="/allAppointments")
    public List<AppointmentModel> getAppointments(@RequestParam String region) {
        return this.witchDoctorService.getAppointmentModels(region);
    }

    @PostMapping
    public List<GeocodedWaypoint> createRoute() {
        try {
             return this.geoService.createRoute(new LatLng(48.9832841, 21.2176398),
                    new LatLng(49.0017950, 49.0017950),
                    new LatLng[]{
                            new LatLng(48.9856443, 21.2209088),
                            new LatLng(48.9861461, 21.2261563),
                            new LatLng(48.9874682, 21.2294855),
                            new LatLng(48.9909244, 21.2295512),
                            new LatLng(48.9928871, 21.2292352),
                            new LatLng(48.9921334, 21.2246742),
                            new LatLng(48.9943196, 21.2234792),
                            new LatLng(48.9966345, 21.2221262),
                            new LatLng(48.9981191, 21.2271386),
                            new LatLng(49.0009168, 21.2359527)
                    });
        } catch (IOException e) {
            e.printStackTrace();
        } catch (InterruptedException e) {
            e.printStackTrace();
        } catch (ApiException e) {
            e.printStackTrace();
        }

        return null;
    }
}
