package com.terzimurat.terzimuratbackend.dto;

import com.terzimurat.terzimuratbackend.entity.AppointmentStatus;
import lombok.Builder;
import lombok.Data;

import java.math.BigDecimal;
import java.time.LocalDateTime;

@Data
@Builder
public class AppointmentResponse {

    private Long id;

    private String customerName;

    private String email;

    private String phone;

    private String message;

    private String fabric;

    private String lapel;

    private String button;

    private BigDecimal price;

    private LocalDateTime createdAt;

    private AppointmentStatus status;
}