package com.wonderlust.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.wonderlust.entity.Booking;
import com.wonderlust.repository.BookingRepository;

@Service
public class BookingService {

    @Autowired
    private BookingRepository bookingRepository;
    
    @Autowired
    private EmailService emailService;

    public Booking saveBooking(Booking booking) {

        Booking savedBooking =
                bookingRepository.save(booking);

        emailService.sendBookingConfirmation(
                savedBooking
        );

        return savedBooking;
    }

    public List<Booking> getAllBookings() {
        return bookingRepository.findAll();
    }
    
    public List<Booking> getBookingsByEmail(String email) {
        return bookingRepository.findByEmail(email);
    }
    
    public void deleteBooking(Long id) {
        bookingRepository.deleteById(id);
    }
    
    public Booking updateBooking(
            Long id,
            Booking updatedBooking) {

        Booking booking =
                bookingRepository.findById(id)
                .orElseThrow();

        booking.setTravelDate(
                updatedBooking.getTravelDate());

        booking.setTravelers(
                updatedBooking.getTravelers());

        return bookingRepository.save(
                booking);
    }
}