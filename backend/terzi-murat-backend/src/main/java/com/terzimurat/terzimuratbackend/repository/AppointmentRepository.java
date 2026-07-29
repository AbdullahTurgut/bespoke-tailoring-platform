package com.terzimurat.terzimuratbackend.repository;

import com.terzimurat.terzimuratbackend.entity.Appointment;
import org.springframework.data.jpa.repository.JpaRepository;

public interface AppointmentRepository extends JpaRepository<Appointment, Long> {
}