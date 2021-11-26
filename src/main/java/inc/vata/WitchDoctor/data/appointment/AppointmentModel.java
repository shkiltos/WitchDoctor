package inc.vata.WitchDoctor.data.appointment;

import com.sun.istack.Nullable;
import lombok.Data;
import org.springframework.beans.factory.annotation.Required;

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

    @Column(name = "street")
    private String street;

    @Column(name = "house")
    private String house;

    @Column(name = "apartment")
    private String apartment;

    @Column(name = "fullName")
    private String fullName;

    @Column(name = "birthDate")
    private String birthDate;

    @Column(name = "symptoms")
    private String symptoms;

    @Column(name = "arrivalDate")
    private Date arrivalDate;

    @Nullable
    @Column(name = "region")
    private String region;
}
