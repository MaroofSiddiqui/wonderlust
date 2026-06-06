package com.wonderlust.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import com.wonderlust.entity.Tour;

public interface TourRepository
        extends JpaRepository<Tour, Long> {

}