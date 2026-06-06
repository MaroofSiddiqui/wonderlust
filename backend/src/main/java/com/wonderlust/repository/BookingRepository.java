package com.wonderlust.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import com.wonderlust.entity.Booking;

public interface BookingRepository
        extends JpaRepository<Booking, Long> {

    List<Booking> findByEmail(String email);

}