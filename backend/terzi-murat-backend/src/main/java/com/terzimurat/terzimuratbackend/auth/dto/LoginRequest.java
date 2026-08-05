package com.terzimurat.terzimuratbackend.auth.dto;

import jakarta.validation.constraints.Email;
import jakarta.validation.constraints.NotBlank;

public class LoginRequest {

    @NotBlank(message = "E-posta zorunludur.")
    @Email(message = "Geçerli bir e-posta adresi giriniz.")
    private String email;

    @NotBlank(message = "Şifre zorunludur.")
    private String password;

    public LoginRequest() {
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }
}