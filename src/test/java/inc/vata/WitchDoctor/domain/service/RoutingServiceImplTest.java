package inc.vata.WitchDoctor.domain.service;

import com.google.gson.Gson;
import org.junit.jupiter.api.Test;
import org.junit.runner.RunWith;
import org.mockito.Spy;
import org.mockito.junit.MockitoJUnitRunner;

@RunWith(MockitoJUnitRunner.class)
class RoutingServiceImplTest {

    @Spy
    private RestClient restClient = new RestClient();

    @Spy
    private Gson gson = new Gson();

    @Spy
    private RoutingServiceImpl routingService = new RoutingServiceImpl(this.restClient, this.gson);

    @Test
    void geocodeAddress() {
        this.routingService.geocodeAddress("г. Иваново, пр-т. Ленина, д. 12Б");
    }
}