package com.terzimurat.terzimuratbackend.service;

import com.terzimurat.terzimuratbackend.dto.AppointmentRequest;
import com.terzimurat.terzimuratbackend.dto.AppointmentResponse;
import com.terzimurat.terzimuratbackend.dto.UpdateStatusRequest;
import com.terzimurat.terzimuratbackend.entity.Appointment;
import com.terzimurat.terzimuratbackend.entity.AppointmentStatus;
import com.terzimurat.terzimuratbackend.exception.AppointmentNotFoundException;
import com.terzimurat.terzimuratbackend.repository.AppointmentRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;

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
                .status(AppointmentStatus.PENDING)
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


    public List<AppointmentResponse> getAllAppointments() {

        return appointmentRepository.findAllByOrderByCreatedAtDesc()
                .stream()
                .map(appointment -> AppointmentResponse.builder()
                        .id(appointment.getId())
                        .customerName(appointment.getCustomerName())
                        .email(appointment.getEmail())
                        .phone(appointment.getPhone())
                        .message(appointment.getMessage())
                        .fabric(appointment.getFabric())
                        .lapel(appointment.getLapel())
                        .button(appointment.getButton())
                        .price(appointment.getPrice())
                        .createdAt(appointment.getCreatedAt())
                        .status(appointment.getStatus())
                        .build()
                )
                .toList();
    }

    public AppointmentResponse updateStatus(
            Long id,
            UpdateStatusRequest request
    ) {

        Appointment appointment = appointmentRepository.findById(id)
                .orElseThrow(() ->
                        new AppointmentNotFoundException(
                                "Randevu bulunamadı"
                        )
                );


        appointment.setStatus(request.getStatus());


        Appointment updatedAppointment =
                appointmentRepository.save(appointment);


        return AppointmentResponse.builder()
                .id(updatedAppointment.getId())
                .customerName(updatedAppointment.getCustomerName())
                .email(updatedAppointment.getEmail())
                .phone(updatedAppointment.getPhone())
                .message(updatedAppointment.getMessage())
                .fabric(updatedAppointment.getFabric())
                .lapel(updatedAppointment.getLapel())
                .button(updatedAppointment.getButton())
                .price(updatedAppointment.getPrice())
                .createdAt(updatedAppointment.getCreatedAt())
                .status(updatedAppointment.getStatus())
                .build();
    }

    public AppointmentResponse getAppointmentById(Long id) {

        Appointment appointment = appointmentRepository.findById(id)
                .orElseThrow(() ->
                        new AppointmentNotFoundException(
                                "Randevu bulunamadı"
                        )
                );


        return AppointmentResponse.builder()
                .id(appointment.getId())
                .customerName(appointment.getCustomerName())
                .email(appointment.getEmail())
                .phone(appointment.getPhone())
                .message(appointment.getMessage())
                .fabric(appointment.getFabric())
                .lapel(appointment.getLapel())
                .button(appointment.getButton())
                .price(appointment.getPrice())
                .createdAt(appointment.getCreatedAt())
                .status(appointment.getStatus())
                .build();
    }


    public List<AppointmentResponse> getAppointmentsByStatus(
            AppointmentStatus status
    ) {

        return appointmentRepository
                .findAllByStatus(status)
                .stream()
                .map(this::mapToResponse)
                .toList();
    }

    private AppointmentResponse mapToResponse(
            Appointment appointment
    ) {

        return AppointmentResponse.builder()
                .id(appointment.getId())
                .customerName(appointment.getCustomerName())
                .email(appointment.getEmail())
                .phone(appointment.getPhone())
                .message(appointment.getMessage())
                .fabric(appointment.getFabric())
                .lapel(appointment.getLapel())
                .button(appointment.getButton())
                .price(appointment.getPrice())
                .createdAt(appointment.getCreatedAt())
                .status(appointment.getStatus())
                .build();
    }
}