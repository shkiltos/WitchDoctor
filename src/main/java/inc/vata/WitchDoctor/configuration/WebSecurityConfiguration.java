package inc.vata.WitchDoctor.configuration;


import inc.vata.WitchDoctor.domain.service.authentication.UserDetailsServiceImpl;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.http.HttpStatus;
import org.springframework.security.authentication.dao.DaoAuthenticationProvider;
import org.springframework.security.config.annotation.authentication.builders.AuthenticationManagerBuilder;
import org.springframework.security.config.annotation.method.configuration.EnableGlobalMethodSecurity;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.config.annotation.web.configuration.WebSecurityConfigurerAdapter;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.security.web.authentication.logout.HttpStatusReturningLogoutSuccessHandler;

import javax.servlet.http.HttpServletResponse;

@Configuration
@EnableWebSecurity
@EnableGlobalMethodSecurity(securedEnabled = true)
@RequiredArgsConstructor(onConstructor_ ={@Autowired} )
public class WebSecurityConfiguration extends WebSecurityConfigurerAdapter {


    @Value("${witchdoctor.security.bCryptRounds:#{12}}")
    private Integer passwordHashGenStrength;

    @Value("${witchdoctor.api.prefix:{/api}}")
    private String apiPrefix;

    private final UserDetailsServiceImpl userDetailsService;

    @Override
    protected void configure(AuthenticationManagerBuilder auth)
            throws Exception {
        auth
//                .authenticationProvider(authenticationProvider())
        .inMemoryAuthentication().withUser("admin")
        .password(bCryptPasswordEncoder().encode("admin"))
        .roles("user");
    }

    @Bean
    public DaoAuthenticationProvider authenticationProvider() {
        DaoAuthenticationProvider authProvider
                = new DaoAuthenticationProvider();
        authProvider.setUserDetailsService(userDetailsService);
        authProvider.setPasswordEncoder(bCryptPasswordEncoder());
        return authProvider;
    }

    @Bean
    public PasswordEncoder bCryptPasswordEncoder() {
        return new BCryptPasswordEncoder(this.passwordHashGenStrength);
    }

    @Override
    protected void configure(HttpSecurity http) throws Exception {
        http
                .cors()
                .and()
                .csrf().disable()
                .antMatcher("/**")
                .authorizeRequests()
                .and()
                .authorizeRequests()
                .antMatchers("/login", "/resources/**").permitAll()
                .anyRequest().authenticated()
                .and()
                .logout().permitAll()
                .logoutUrl("/logout")
                .logoutSuccessHandler((new HttpStatusReturningLogoutSuccessHandler(HttpStatus.OK)))
                .invalidateHttpSession(true)
                .and()
                .formLogin()
                .failureHandler(
                        (request, response, authentication) -> response.setStatus(HttpServletResponse.SC_UNAUTHORIZED)
                )
                .successHandler(
                        (request, response, authentication) -> {
                            response.setStatus(HttpServletResponse.SC_OK);
                            if (request.getHeader("Accept").contains("text/html")) {
                                response.sendRedirect("/swagger-ui/index.html");
                            }
                        })
                .and()
                .httpBasic();
    }
}
