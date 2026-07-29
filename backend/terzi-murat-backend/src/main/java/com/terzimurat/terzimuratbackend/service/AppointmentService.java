package com.terzimurat.terzimuratbackend.service;

import com.terzimurat.terzimuratbackend.dto.AppointmentRequest;
import com.terzimurat.terzimuratbackend.dto.AppointmentResponse;
import com.terzimurat.terzimuratbackend.entity.Appointment;
import com.terzimurat.terzimuratbackend.repository.AppointmentRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

@Service
@RequiredArgsConstructor
public class AppointmentService {

    private final AppointmentRepository appointmentRepository;


    public AppointmentResponse createAppointment(AppointmentRequest request) {

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


        Appointment savedAppointment =
                appointmentRepository.save(appointment);


        return AppointmentResponse.builder()
                .id(savedAppointment.getId())
                .customerName(savedAppointment.getCustomerName())
                .email(savedAppointment.getEmail())
                .phone(savedAppointment.getPhone())
                .message(savedAppointment.getMessage())
                .fabric(savedAppointment.getFabric())
                .lapel(savedAppointment.getLapel())
                .button(savedAppointment.getButton())
                .price(savedAppointment.getPrice())
                .createdAt(savedAppointment.getCreatedAt())
                .build();
    }
}