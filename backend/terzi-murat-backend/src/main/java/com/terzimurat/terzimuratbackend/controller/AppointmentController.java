package com.terzimurat.terzimuratbackend.controller;

import com.terzimurat.terzimuratbackend.dto.AppointmentRequest;
import com.terzimurat.terzimuratbackend.dto.AppointmentResponse;
import com.terzimurat.terzimuratbackend.service.AppointmentService;
import jakarta.validation.Valid;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/appointments")
@RequiredArgsConstructor
public class AppointmentController {

    private final AppointmentService appointmentService;


    @PostMapping
    public ResponseEntity<AppointmentResponse> createAppointment(
            @Valid @RequestBody AppointmentRequest request
    ) {

        AppointmentResponse appointment =
                appointmentService.createAppointment(request);

        return new ResponseEntity<>(
                appointment,
                HttpStatus.CREATED
        );
    }
}