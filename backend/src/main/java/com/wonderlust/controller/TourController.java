package com.wonderlust.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import com.wonderlust.entity.Tour;
import com.wonderlust.service.TourService;

@RestController
@RequestMapping("/api/tours")
@CrossOrigin(origins = "http://localhost:3000")
public class TourController {

    @Autowired
    private TourService service;

    @GetMapping
    public List<Tour> getAllTours() {
        return service.getAllTours();
    }

    @PostMapping
    public Tour addTour(
            @RequestBody Tour tour) {

        return service.saveTour(tour);
    }

    @DeleteMapping("/{id}")
    public void deleteTour(
            @PathVariable Long id) {

        service.deleteTour(id);
    }
}