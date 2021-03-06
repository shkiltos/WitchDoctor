package inc.vata.WitchDoctor.data.users;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface UsersRepository extends JpaRepository<UserModel, Integer> {

    Optional<UserModel> findFirstByUsernameIgnoreCase(String username);
    UserModel findFirstByUsernameOrEmail(String arg1, String arg2);
    UserModel findUserModelById(Integer id);
}
