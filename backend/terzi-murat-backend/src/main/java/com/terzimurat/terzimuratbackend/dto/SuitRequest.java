package com.terzimurat.terzimuratbackend.dto;

import jakarta.validation.constraints.NotBlank;
import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class SuitRequest {

    @NotBlank(message = "Kumaş seçimi zorunludur")
    private String fabric;

    @NotBlank(message = "Yaka seçimi zorunludur")
    private String lapel;

    @NotBlank(message = "Düğme seçimi zorunludur")
    private String button;
}