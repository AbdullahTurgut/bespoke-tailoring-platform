package com.terzimurat.terzimuratbackend.dto;

import jakarta.validation.constraints.Email;
import jakarta.validation.constraints.NotBlank;
import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class CustomerRequest {

    @NotBlank(message = "Ad soyad zorunludur")
    private String name;

    @Email(message = "Geçerli bir email giriniz")
    @NotBlank(message = "Email zorunludur")
    private String email;

    @NotBlank(message = "Telefon zorunludur")
    private String phone;

    private String message;
}