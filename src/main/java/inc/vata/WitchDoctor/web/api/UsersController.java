package inc.vata.WitchDoctor.web.api;

import inc.vata.WitchDoctor.data.users.UserModel;
import inc.vata.WitchDoctor.domain.service.users.UsersService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.*;

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

    @PostMapping(value = "/login", consumes = MediaType.APPLICATION_FORM_URLENCODED_VALUE)
    @ResponseStatus(HttpStatus.OK)
    public UserModel login(@RequestParam Map<String, String> creds) {
        return this.usersService.findUser(creds.get("username"));
    }

//    @GetMapping
//    public Map<String, String> whoAmI(
////            @ApiIgnore @AuthenticationPrincipal UserModelDetails userModel
//    ) {
////        return Collections.singletonMap("role", userModel.getUser().getRole().getAuthority());
////        return Collections.singletonMap("role", userModel.getUser().getRole().getAuthority());
//    }

}
