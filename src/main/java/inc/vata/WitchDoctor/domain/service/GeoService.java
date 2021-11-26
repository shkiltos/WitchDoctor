package inc.vata.WitchDoctor.domain.service;

import com.google.maps.DirectionsApi;
import com.google.maps.GeoApiContext;
import com.google.maps.errors.ApiException;
import com.google.maps.model.*;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.io.IOException;
import java.util.ArrayList;
import java.util.List;

@Service
@RequiredArgsConstructor(onConstructor_ ={@Autowired})
@Slf4j
public class GeoService {

    private final GeoApiContext geoApiContext;

    public List<GeocodedWaypoint> createRoute(LatLng origin, LatLng destination, LatLng[] waypoints) throws IOException, InterruptedException, ApiException {
        final DirectionsResult result = DirectionsApi.newRequest(geoApiContext)
                .origin(origin)
                .destination(destination)
                .mode(TravelMode.WALKING)
                .waypoints(waypoints)
                .await();
        DirectionsRoute route = result.routes[0];
        List<GeocodedWaypoint> waypointList = new ArrayList<>(route.waypointOrder.length);
        for(int i : route.waypointOrder) {
            waypointList.add(result.geocodedWaypoints[route.waypointOrder[i]]);
        }
        return waypointList;
    }
}
