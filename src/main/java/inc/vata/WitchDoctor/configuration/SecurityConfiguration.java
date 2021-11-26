package inc.vata.WitchDoctor.configuration;

import org.springframework.beans.factory.annotation.Value;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

@Configuration
public class SecurityConfiguration {

    @Value("${witchdoctor.security.bCryptRounds:#{12}}")
    private Integer passwordHashGenStrength;

    @Value("${witchdoctor.api.prefix:{/api}}")
    private String apiPrefix;

//    @Bean
//    public PasswordEncoder bCryptPasswordEncoder() {
//        return new BCryptPasswordEncoder(this.passwordHashGenStrength);
//    }
}
