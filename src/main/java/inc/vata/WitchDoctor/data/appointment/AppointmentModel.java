package inc.vata.WitchDoctor.data.appointment;

import inc.vata.WitchDoctor.data.users.UserModel;
import lombok.Data;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.OneToOne;
import javax.persistence.Table;
import java.util.Date;

@Data
@Entity
@Table(name = "appointments", schema = "public")
public class AppointmentModel {

    @Id
    @Column(name = "id")
    @GeneratedValue
    private Integer id;

    @Column(name = "date")
    private Date date;

    @OneToOne(cascade = CascadeType.ALL)
    @JoinColumn(name = "user_id", referencedColumnName = "id")
    private UserModel userModel;

    @Column(name = "lat")
    private String Lat;

    @Column(name = "long")
    private String Long;
}
