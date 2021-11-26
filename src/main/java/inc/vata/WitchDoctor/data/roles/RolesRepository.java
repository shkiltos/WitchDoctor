package inc.vata.WitchDoctor.data.roles;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface RolesRepository extends JpaRepository<RoleModel, Integer> {
    Optional<RoleModel> findFirstByName(String name);
}
