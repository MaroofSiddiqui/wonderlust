package com.wonderlust.controller;
import com.wonderlust.repository.UserRepository;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import com.wonderlust.dto.LoginRequest;
import com.wonderlust.entity.User;
import com.wonderlust.service.UserService;

@RestController
@RequestMapping("/api/users")
@CrossOrigin(origins = "http://localhost:3000")
public class UserController {

    @Autowired
    private UserService service;
    
    @Autowired
    private UserRepository repository;

    @PostMapping("/register")
    public User register(@RequestBody User user) {
        return service.register(user);
    }

    @PostMapping("/login")
    public User login(
            @RequestBody LoginRequest request) {

        return service.login(
                request.getEmail(),
                request.getPassword());
    }

    @GetMapping
    public List<User> getAllUsers() {
        return service.getAllUsers();
    }
    
    @PutMapping("/make-manager/{id}")
    public User makeManager(
            @PathVariable Long id) {

        User user =
            repository.findById(id)
            .orElseThrow();

        user.setRole("MANAGER");

        return repository.save(user);
    }
    
    @PutMapping("/remove-manager/{id}")
    public User removeManager(
            @PathVariable Long id) {

        User user =
            repository.findById(id)
            .orElseThrow();

        user.setRole("USER");

        return repository.save(user);
    }
}