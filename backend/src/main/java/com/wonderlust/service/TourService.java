package com.wonderlust.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.wonderlust.entity.Tour;
import com.wonderlust.repository.TourRepository;

@Service
public class TourService {

    @Autowired
    private TourRepository repository;

    public List<Tour> getAllTours() {
        return repository.findAll();
    }

    public Tour saveTour(Tour tour) {
        return repository.save(tour);
    }

    public void deleteTour(Long id) {
        repository.deleteById(id);
    }
}