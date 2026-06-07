package com.wonderlust.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import com.wonderlust.entity.Booking;
import com.wonderlust.repository.BookingRepository;
import com.wonderlust.service.BookingService;

@RestController
@RequestMapping("/api/bookings")
@CrossOrigin(origins = "http://localhost:3000")
public class BookingController {

    @Autowired
    private BookingService bookingService;
    
    @Autowired
    private BookingRepository repository;

    @PostMapping
    public Booking createBooking(@RequestBody Booking booking) {
        return bookingService.saveBooking(booking);
    }

    @GetMapping
    public List<Booking> getAllBookings() {
        return bookingService.getAllBookings();
    }

    @GetMapping("/email/{email}")
    public List<Booking> getBookingsByEmail(
            @PathVariable String email) {

        return bookingService.getBookingsByEmail(email);
    }
    
    @DeleteMapping("/{id}")
    public void deleteBooking(
            @PathVariable Long id) {

        bookingService.deleteBooking(id);
    }
    
    @PutMapping("/{id}")
    public Booking updateBooking(
            @PathVariable Long id,
            @RequestBody Booking booking) {

        return bookingService.updateBooking(
                id,
                booking);
    }
    
    @PutMapping("/{id}/status")
    public Booking updateStatus(
            @PathVariable Long id,
            @RequestParam String status) {

        Booking booking =
                repository.findById(id)
                .orElseThrow();

        booking.setStatus(status);

        return repository.save(booking);
    }
    
    
}