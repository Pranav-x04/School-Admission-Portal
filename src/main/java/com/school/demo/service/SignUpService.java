package com.school.demo.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.school.demo.entity.Login;
import com.school.demo.entity.Signup;
import com.school.demo.repo.SignUpRepo;

@Service
public class SignUpService {
	@Autowired
	private SignUpRepo rep;
	public Signup addDetails (Signup s) {
		return rep.save(s);
	}
	
	public List<Signup> getDetails() {
		return rep.findAll();
	}

}
