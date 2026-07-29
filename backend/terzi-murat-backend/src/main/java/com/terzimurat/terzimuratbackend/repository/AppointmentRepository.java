package com.terzimurat.terzimuratbackend.repository;

import com.terzimurat.terzimuratbackend.entity.Appointment;
import com.terzimurat.terzimuratbackend.entity.AppointmentStatus;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface AppointmentRepository
        extends JpaRepository<Appointment, Long> {

    List<Appointment> findAllByOrderByCreatedAtDesc();

    List<Appointment> findAllByStatus(AppointmentStatus status);

}