package com.terzimurat.terzimuratbackend.dto;

import com.terzimurat.terzimuratbackend.entity.AppointmentStatus;
import jakarta.validation.constraints.NotNull;
import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class UpdateStatusRequest {

    @NotNull(message = "Status bilgisi zorunludur")
    private AppointmentStatus status;
}