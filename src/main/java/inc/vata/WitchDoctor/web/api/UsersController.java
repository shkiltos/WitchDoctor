package inc.vata.WitchDoctor.web.api;

import inc.vata.WitchDoctor.data.users.UserModel;
import lombok.RequiredArgsConstructor;
import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping(
        path = "${witchdoctor.api.prefix:}" + "/v1/users",
        produces = MediaType.APPLICATION_JSON_VALUE)
@RequiredArgsConstructor
public class UsersController {

//    private final User

    @PostMapping
    public UserModel createUser(UserModel userModel) {
        return null;
    }
}
