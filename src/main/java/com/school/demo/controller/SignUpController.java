package com.school.demo.controller;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.school.demo.entity.Login;
import com.school.demo.entity.Signup;
import com.school.demo.service.SignUpService;
@CrossOrigin(origins="http://localhost:3000/")
@RestController
public class SignUpController {
	@Autowired
	private SignUpService ser;
	@PostMapping("/add")
	public Signup postDetails(@RequestBody Signup s) {
		return ser.addDetails(s);
	}
	
	@PostMapping("/validate")
	public boolean getDetails(@RequestBody Login l) {
	    boolean[] flag = { false }; // Using an array to act as a container for the boolean value
	    List<Signup> users = ser.getDetails();

	    users.forEach(user -> {
	        if (user.getMail().equals(l.getMail())) {
	            System.out.println("matched");
	            flag[0] = true; // Set the value of flag inside the lambda expression
	        }
	    });

	    return flag[0];
	 }
	}


