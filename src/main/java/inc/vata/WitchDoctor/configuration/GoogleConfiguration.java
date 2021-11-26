package inc.vata.WitchDoctor.configuration;

import com.google.maps.GeoApiContext;
import lombok.extern.slf4j.Slf4j;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

@Configuration
@Slf4j
public class GoogleConfiguration {

    @Bean
    public GeoApiContext geoApiContext() {
        GeoApiContext geoApiContext = new GeoApiContext.Builder()
                .apiKey("AIzaSyDVvbNyAkaBUdQoJnwLiUOV3BsrXU-Z9B4")
                .build();
        Runtime.getRuntime().addShutdownHook(new Thread(() -> {
            geoApiContext.shutdown();
            log.info("GeoApiContext was destroyed");
        }));
        log.info("registered shutdown hook for Geo Api Context");
        return geoApiContext;
    }
}
