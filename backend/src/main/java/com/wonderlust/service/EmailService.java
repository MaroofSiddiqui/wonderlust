package com.wonderlust.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.mail.SimpleMailMessage;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.stereotype.Service;

import com.wonderlust.entity.Booking;

@Service
public class EmailService {

	@Autowired
	private JavaMailSender mailSender;

	public void sendBookingConfirmation(Booking booking) {

		SimpleMailMessage message = new SimpleMailMessage();

		message.setTo(booking.getEmail());

		message.setSubject("WonderLust Booking Confirmation");

		message.setText(
		        "====================================\n" +
		        "        WONDERLUST TRAVEL INVOICE\n" +
		        "====================================\n\n" +

		        "Booking ID      : " + booking.getId() + "\n" +
		        "Customer Name   : " + booking.getFullName() + "\n" +
		        "Tour Package    : " + booking.getTourName() + "\n" +
		        "Travel Date     : " + booking.getTravelDate() + "\n" +
		        "No. of Travelers: " + booking.getTravelers() + "\n\n" +
		        "Payment Method  : " + booking.getPaymentMethod() + "\n" +
		        "Transaction ID  : " + booking.getTransactionId() + "\n" +
		        "Payment Status  : " + booking.getPaymentStatus() + "\n" +

		        "------------------------------------\n" +
		        "Total Amount    : ₹" + booking.getAmount() + "\n" +
		        "Payment Status  : PAID\n" +
		        "------------------------------------\n\n" +

		        "Your booking has been confirmed successfully.\n\n" +

		        "Thank you for choosing WonderLust.\n" +
		        "We wish you a safe and enjoyable journey.\n\n" +

		        "Regards,\n" +
		        "WonderLust Team"
		);
		mailSender.send(message);
	}
}