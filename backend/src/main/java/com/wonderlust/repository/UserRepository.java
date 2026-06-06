package com.wonderlust.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import com.wonderlust.entity.User;

public interface UserRepository
        extends JpaRepository<User, Long> {

    User findByEmail(String email);
}