package inc.vata.WitchDoctor.domain.service.roles;

import inc.vata.WitchDoctor.data.roles.RoleModel;
import inc.vata.WitchDoctor.data.roles.RolesRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@RequiredArgsConstructor(onConstructor_ = {@Autowired} )
public class RolesService {

    private final RolesRepository rolesRepository;

    public List<RoleModel> getRoles() {
        return this.rolesRepository.findAll();
    }

    public RoleModel getRole(String name) {
        return this.rolesRepository.findFirstByName(name).get();
    }
}
