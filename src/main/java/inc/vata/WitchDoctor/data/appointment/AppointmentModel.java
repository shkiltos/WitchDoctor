package inc.vata.WitchDoctor.data.appointment;

import lombok.Data;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
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

    @Column(name = "address")
    private String address;

    @Column(name = "fullName")
    private String fullName;

    @Column(name = "birthDate")
    private String birthDate;

    @Column(name = "symptoms")
    private String symptoms;

    @Column(name = "arrivalDate")
    private Date arrivalDate;
}
