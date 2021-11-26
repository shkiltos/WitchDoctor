package inc.vata.WitchDoctor.domain.service.users;

import inc.vata.WitchDoctor.data.users.UserModel;
import inc.vata.WitchDoctor.data.users.UsersRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

@Service
@RequiredArgsConstructor(onConstructor_ = {@Autowired})
public class UsersService {

    private final UsersRepository usersRepository;

    @Transactional(readOnly = true)
    public List<UserModel> getAllUsers() {
        return this.usersRepository.findAll();
    }

    @Transactional
    public UserModel createUser(UserModel userModel) {
        return this.usersRepository.save(userModel);
    }


}
