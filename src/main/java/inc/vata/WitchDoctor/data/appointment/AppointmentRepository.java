package inc.vata.WitchDoctor.data.appointment;

import org.springframework.data.jpa.repository.JpaRepository;

public interface AppointmentRepository extends JpaRepository<AppointmentModel, Integer> {
}
