package com.terzimurat.terzimuratbackend.repository;

import com.terzimurat.terzimuratbackend.entity.AdminUser;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;

public interface AdminUserRepository extends JpaRepository<AdminUser, Long> {

    Optional<AdminUser> findByEmail(String email);
}