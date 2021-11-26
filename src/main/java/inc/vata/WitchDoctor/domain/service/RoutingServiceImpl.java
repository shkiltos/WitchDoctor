package inc.vata.WitchDoctor.domain.service;

import com.fasterxml.jackson.databind.ObjectMapper;
import lombok.SneakyThrows;
import org.json.JSONObject;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.HashMap;
import java.util.Map;

@Service
public class RoutingServiceImpl {

    private RestClient restClient;

    @Autowired
    public RoutingServiceImpl(RestClient restClient) {
        this.restClient = restClient;
    }

    private static String GOOGLE_API_KEY = "AIzaSyDVvbNyAkaBUdQoJnwLiUOV3BsrXU-Z9B4";

    private static String GOOGLE_GEO_URL = "https://maps.googleapis.com/maps/api/geocode/json";

    @SneakyThrows
    public JSONObject geocodeAddress(String address) {
        Map<String, String> params = new HashMap<>();
        params.put("address", address);
        params.put("key", GOOGLE_API_KEY);

        JSONObject response = new JSONObject(this.restClient.get(GOOGLE_GEO_URL, params));
        JSONObject geometry = (JSONObject)(((JSONObject)response.getJSONArray("results").get(0)).get("geometry"));
        return geometry.getJSONObject("location");
    }
}
