package com.wonderlust.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.wonderlust.entity.User;
import com.wonderlust.repository.UserRepository;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;

@Service
public class UserService {
	
	@Autowired
	private BCryptPasswordEncoder passwordEncoder;

    @Autowired
    private UserRepository repository;

    public User register(User user) {
    	user.setPassword(
    		    passwordEncoder.encode(
    		        user.getPassword()
    		    )
    		);

    		repository.save(user);
        return repository.save(user);
    }

    public List<User> getAllUsers() {
        return repository.findAll();
    }

    public User login(String email, String password) {

        User user =
                repository.findByEmail(email);

        if( user != null && (passwordEncoder.matches(
                password,
                user.getPassword()
        ))) {
            return user;
        }

        return null;
    }
}