package com.terzimurat.terzimuratbackend.controller;

import com.terzimurat.terzimuratbackend.dto.AppointmentRequest;
import com.terzimurat.terzimuratbackend.entity.Appointment;
import com.terzimurat.terzimuratbackend.service.AppointmentService;
import jakarta.validation.Valid;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/appointments")
@RequiredArgsConstructor
@CrossOrigin(origins = "http://localhost:5173")
public class AppointmentController {

    private final AppointmentService appointmentService;


    @PostMapping
    public ResponseEntity<Appointment> createAppointment(
            @Valid @RequestBody AppointmentRequest request
    ) {

        Appointment appointment =
                appointmentService.createAppointment(request);

        return new ResponseEntity<>(
                appointment,
                HttpStatus.CREATED
        );
    }
}