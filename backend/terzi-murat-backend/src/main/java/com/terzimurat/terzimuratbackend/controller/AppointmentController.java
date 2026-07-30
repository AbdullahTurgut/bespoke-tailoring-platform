package com.terzimurat.terzimuratbackend.controller;

import com.terzimurat.terzimuratbackend.dto.AppointmentRequest;
import com.terzimurat.terzimuratbackend.dto.AppointmentResponse;
import com.terzimurat.terzimuratbackend.dto.UpdateAppointmentStatusRequest;
import com.terzimurat.terzimuratbackend.dto.UpdateStatusRequest;
import com.terzimurat.terzimuratbackend.entity.Appointment;
import com.terzimurat.terzimuratbackend.entity.enums.AppointmentStatus;
import com.terzimurat.terzimuratbackend.service.AppointmentService;
import jakarta.validation.Valid;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.bind.annotation.PathVariable;
import java.util.List;

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

    @GetMapping
    public ResponseEntity<List<AppointmentResponse>> getAppointments(
            @RequestParam(required = false) AppointmentStatus status
    ) {

        if(status != null) {

            return ResponseEntity.ok(
                    appointmentService.getAppointmentsByStatus(status)
            );

        }


        return ResponseEntity.ok(
                appointmentService.getAllAppointments()
        );
    }

    @PutMapping("/{id}/status")
    public ResponseEntity<AppointmentResponse> updateStatus(
            @PathVariable Long id,
            @Valid @RequestBody UpdateStatusRequest request
    ) {

        return ResponseEntity.ok(
                appointmentService.updateStatus(id, request)
        );
    }

    @GetMapping("/{id}")
    public ResponseEntity<AppointmentResponse> getAppointmentById(
            @PathVariable Long id
    ) {

        return ResponseEntity.ok(
                appointmentService.getAppointmentById(id)
        );
    }

    @PatchMapping("/{id}/status")
    public ResponseEntity<AppointmentResponse> updateStatus(
            @PathVariable Long id,
            @Valid @RequestBody UpdateAppointmentStatusRequest request
    ) {

        Appointment appointment =
                appointmentService.updateStatus(
                        id,
                        request.getStatus()
                );


        return ResponseEntity.ok(
                appointmentService.mapToResponse(appointment)
        );
    }
}