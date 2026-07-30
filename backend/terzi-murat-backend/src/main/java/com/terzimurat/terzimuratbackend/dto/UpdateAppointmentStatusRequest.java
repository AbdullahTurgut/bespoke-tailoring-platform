package com.terzimurat.terzimuratbackend.dto;

import com.terzimurat.terzimuratbackend.entity.enums.AppointmentStatus;
import jakarta.validation.constraints.NotNull;
import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class UpdateAppointmentStatusRequest {

    @NotNull(message = "Status zorunludur")
    private AppointmentStatus status;
}