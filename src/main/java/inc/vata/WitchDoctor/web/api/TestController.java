package inc.vata.WitchDoctor.web.api;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class TestController {

    @GetMapping
    public String getHelloWorld() {
        return "Hello world";
    }
}
