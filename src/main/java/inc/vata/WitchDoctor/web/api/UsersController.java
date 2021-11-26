package inc.vata.WitchDoctor.web.api;

import inc.vata.WitchDoctor.data.users.UserModel;
import inc.vata.WitchDoctor.domain.service.users.UsersService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.MediaType;
import org.springframework.security.core.annotation.AuthenticationPrincipal;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping(
        path = "${witchdoctor.api.prefix:}" + "/v1/users",
        consumes = MediaType.APPLICATION_JSON_VALUE,
        produces = MediaType.APPLICATION_JSON_VALUE)
@RequiredArgsConstructor
public class UsersController {

    private final UsersService usersService;

    @PostMapping
    public UserModel createUser(@RequestBody UserModel userModel) {
        return this.usersService.createUser(userModel);
    }

    @GetMapping
    public UserModel whoAmI(@AuthenticationPrincipal UserModel userModel) {
        return userModel;
    }

}
