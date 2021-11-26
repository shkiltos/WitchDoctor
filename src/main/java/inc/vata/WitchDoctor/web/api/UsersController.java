package inc.vata.WitchDoctor.web.api;

import inc.vata.WitchDoctor.data.users.UserModel;
import inc.vata.WitchDoctor.domain.service.authentication.UserModelDetails;
import inc.vata.WitchDoctor.domain.service.users.UsersService;
import lombok.RequiredArgsConstructor;
import org.springframework.security.core.annotation.AuthenticationPrincipal;
import org.springframework.web.bind.annotation.*;
import springfox.documentation.annotations.ApiIgnore;

import java.util.Collections;
import java.util.Map;

@RestController
@RequestMapping(
        path = "${witchdoctor.api.prefix:}" + "/v1/users")
@RequiredArgsConstructor
public class UsersController {

    private final UsersService usersService;

    @PostMapping
    public UserModel createUser(@RequestBody UserModel userModel) {
        return this.usersService.createUser(userModel);
    }

    @GetMapping
    public Map<String, String> whoAmI(@ApiIgnore @AuthenticationPrincipal UserModelDetails userModel) {
        return Collections.singletonMap("role", userModel.getUser().getRole().getAuthority());
    }

}
