package com.terzimurat.terzimuratbackend.dto;

import jakarta.validation.Valid;
import jakarta.validation.constraints.NotNull;
import lombok.Getter;
import lombok.Setter;

import java.math.BigDecimal;

@Getter
@Setter
public class AppointmentRequest {

    @Valid
    @NotNull
    private CustomerRequest customer;

    @Valid
    @NotNull
    private SuitRequest suit;

    @NotNull
    private BigDecimal price;
}