package inc.vata.WitchDoctor.domain.service.authentication;

import inc.vata.WitchDoctor.data.users.UsersRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;

@Service
@RequiredArgsConstructor(onConstructor_={@Autowired})
public class UserDetailsServiceImpl implements UserDetailsService {

    private final UsersRepository usersRepository;

    @Override
    public UserModelDetails loadUserByUsername(String username) throws UsernameNotFoundException {
        return new UserModelDetails(this.usersRepository.findFirstByUsernameIgnoreCase(username).orElse(null));
    }
}
