package inc.vata.WitchDoctor.data.users;

import inc.vata.WitchDoctor.data.roles.RoleModel;
import lombok.EqualsAndHashCode;
import lombok.Getter;
import lombok.Setter;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.ManyToOne;
import javax.persistence.Table;

@Getter
@Setter
@EqualsAndHashCode
@Entity
@Table(name = "users", schema = "public")
public class UserModel {

    @Id
    @Column(name = "id")
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Integer id;

    
    @Column(name = "firstname")
    private String firstname;
    
    
    @Column(name = "secondname")
    private String secondname;

    
    @Column(name = "email")
    private String email;

    
    @Column(name = "username")
    private String username;

    
    @Column(name = "passwordhash")
    private String password;


    @ManyToOne(cascade=CascadeType.ALL, fetch = FetchType.EAGER, targetEntity = RoleModel.class)
    private RoleModel role;
}
