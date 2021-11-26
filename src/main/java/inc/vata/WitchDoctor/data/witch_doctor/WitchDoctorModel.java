package inc.vata.WitchDoctor.data.witch_doctor;

import lombok.Data;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;

@Data
@Entity
@Table(name = "witch_doctor", schema = "public")
public class WitchDoctorModel {

    @Id
    @Column(name = "phone")
    private String phone;


}
