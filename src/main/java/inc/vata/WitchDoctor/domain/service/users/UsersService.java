package inc.vata.WitchDoctor.domain.service.users;

import inc.vata.WitchDoctor.data.roles.RoleModel;
import inc.vata.WitchDoctor.data.users.UserModel;
import inc.vata.WitchDoctor.data.users.UsersRepository;
import inc.vata.WitchDoctor.domain.service.roles.RolesService;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

@Service
@RequiredArgsConstructor(onConstructor_ = {@Autowired})
public class UsersService {

    private String DEFAULT_ROLE = "user";

    private final RolesService roleService;

//    private final PasswordEncoder passwordEncoder;

    private final UsersRepository usersRepository;

    @Transactional(readOnly = true)
    public List<UserModel> getAllUsers() {
        return this.usersRepository.findAll();
    }

    @Transactional
    public UserModel createUser(UserModel userModel) {
//        userModel.setPassword(this.passwordEncoder.encode(userModel.getPassword()));
        RoleModel role = userModel.getRole() == null ? this.roleService.getRole(DEFAULT_ROLE) : userModel.getRole();
        userModel.setRole(role);
        return this.usersRepository.save(userModel);
    }


    @Transactional(readOnly = true)
    public UserModel findUser(String usernameOrEmail) {
        return this.usersRepository.findFirstByUsernameOrEmail(usernameOrEmail, usernameOrEmail);
    }

    public UserModel getUser(Integer id) {
        return this.usersRepository.findUserModelById(id);
    }

    public boolean isUserExists(Integer id) {
        return this.usersRepository.existsById(id);
    }

}
