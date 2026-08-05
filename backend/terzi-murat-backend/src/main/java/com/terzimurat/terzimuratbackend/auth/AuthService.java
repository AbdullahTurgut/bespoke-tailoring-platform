package com.terzimurat.terzimuratbackend.auth;

import com.terzimurat.terzimuratbackend.auth.dto.LoginRequest;
import com.terzimurat.terzimuratbackend.auth.dto.LoginResponse;
import com.terzimurat.terzimuratbackend.security.CustomUserDetailsService;
import com.terzimurat.terzimuratbackend.security.JwtService;
import lombok.RequiredArgsConstructor;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.stereotype.Service;

@Service
@RequiredArgsConstructor
public class AuthService {

    private final AuthenticationManager authenticationManager;

    private final CustomUserDetailsService customUserDetailsService;
    private final JwtService jwtService;

    public LoginResponse login(LoginRequest request) {

        authenticationManager.authenticate(
                new UsernamePasswordAuthenticationToken(
                        request.getEmail(),
                        request.getPassword()
                )
        );

        UserDetails userDetails =
                customUserDetailsService.loadUserByUsername(request.getEmail());

        String token = jwtService.generateToken(userDetails);

        return new LoginResponse(token);
    }
}