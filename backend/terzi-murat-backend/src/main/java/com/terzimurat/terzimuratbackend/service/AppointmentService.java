package com.terzimurat.terzimuratbackend.service;

import com.terzimurat.terzimuratbackend.dto.AppointmentRequest;
import com.terzimurat.terzimuratbackend.entity.Appointment;
import com.terzimurat.terzimuratbackend.repository.AppointmentRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

@Service
@RequiredArgsConstructor
public class AppointmentService {

    private final AppointmentRepository appointmentRepository;


    public Appointment createAppointment(AppointmentRequest request) {

        Appointment appointment = Appointment.builder()
                .customerName(request.getCustomer().getName())
                .email(request.getCustomer().getEmail())
                .phone(request.getCustomer().getPhone())
                .message(request.getCustomer().getMessage())
                .fabric(request.getSuit().getFabric())
                .lapel(request.getSuit().getLapel())
                .button(request.getSuit().getButton())
                .price(request.getPrice())
                .build();


        return appointmentRepository.save(appointment);
    }
}