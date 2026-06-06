package com.wonderlust.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.wonderlust.entity.User;
import com.wonderlust.repository.UserRepository;

@Service
public class UserService {

    @Autowired
    private UserRepository repository;

    public User register(User user) {
        return repository.save(user);
    }

    public List<User> getAllUsers() {
        return repository.findAll();
    }

    public User login(String email, String password) {

        User user =
                repository.findByEmail(email);

        if (
            user != null &&
            user.getPassword().equals(password)
        ) {
            return user;
        }

        return null;
    }
}