package inc.vata.WitchDoctor.domain.service;

import com.fasterxml.jackson.databind.ObjectMapper;
import com.google.gson.Gson;
import lombok.SneakyThrows;
import org.json.JSONObject;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.util.ObjectUtils;

import java.util.HashMap;
import java.util.Map;

public class RoutingServiceImpl {

    private RestClient restClient;
    private Gson gson;

    @Autowired
    public RoutingServiceImpl(RestClient restClient, Gson gson) {
        this.restClient = restClient;
        this.gson = gson;
    }

    private static String GOOGLE_API_KEY = "AIzaSyDVvbNyAkaBUdQoJnwLiUOV3BsrXU-Z9B4";

    private static String GOOGLE_GEO_URL = "https://maps.googleapis.com/maps/api/geocode/json";

    @SneakyThrows
    public void geocodeAddress(String address) {
        Map<String, String> params = new HashMap<>();
        params.put("address", address);
        params.put("key", GOOGLE_API_KEY);

        ObjectMapper objectMapper = new ObjectMapper();

        JSONObject response = new JSONObject(this.restClient.get(GOOGLE_GEO_URL, params));
        JSONObject geometry = (JSONObject)(((JSONObject)response.getJSONArray("results").get(0)).get("geometry"));
        JSONObject location = geometry.getJSONObject("location");

        this.gson.toJson(this.restClient.get(GOOGLE_GEO_URL, params));
    }
}
