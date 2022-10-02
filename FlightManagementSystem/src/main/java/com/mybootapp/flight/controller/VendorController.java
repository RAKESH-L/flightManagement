package com.mybootapp.flight.controller;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.mybootapp.flight.model.Passenger;
import com.mybootapp.flight.model.Vendor;
import com.mybootapp.flight.repository.BookingRepository;
import com.mybootapp.flight.repository.VendorRepository;

@RestController
@CrossOrigin(origins = {"http://localhost:3201"})
public class VendorController {

	@Autowired
	private VendorRepository vendorRepository;
	
	@Autowired
	private BookingRepository bookingRepository;
	
	@PostMapping("/insert/flight")
	public Vendor insertFlightDetails(@RequestBody Vendor vendor) {
		return vendorRepository.save(vendor);
	}
	
	@GetMapping("/flight/all")
	public List<Vendor> getFlightDetails() {
		return vendorRepository.findAll();
	}
	
	@GetMapping("/flight/{sname}")
	public List<Vendor> getVendorBySource(@PathVariable("sname") String sname) {
		List<Vendor> list = vendorRepository.getCourseByDepartment(sname);
		return list;
	} 
	@GetMapping("/flight/one/{id}")
	public Vendor getVendorById(@PathVariable("id") Long id) {
		Optional<Vendor> optional = vendorRepository.findById(id);
		if(!optional.isPresent())
			throw new RuntimeException("ID is Invalid");
		Vendor v = optional.get();
		return v;
	}
	
	
	@GetMapping("/vendor/{sname}/{dname}")
	public List<Vendor> getFlightBySourceDestination(@PathVariable("sname") String sname,
												@PathVariable("dname") String dname) {
		List<Vendor> list = vendorRepository.getFlightBySourceDestination(sname,dname);
		return list;
	}
	
	@GetMapping("/date/{date}")
	public List<Vendor> getAllFlight(@PathVariable("date") String date) {
		List<Vendor> list = vendorRepository.getAllFlight(date);
		return list;
	}
	
	@GetMapping("/flight/{sname}/{dname}/{date}")
	public List<Vendor> getFlightBySourceDestinationDepDate(@PathVariable("sname") String sname,
															@PathVariable("dname") String dname,
															@PathVariable("date") String date) {
		List<Vendor> list = vendorRepository.getFlightBySourceDestinationDepDate(sname, dname, date);
		return list;
	}
	
	@PostMapping("/insert/booking")
	public Passenger insertBooking(@RequestBody Passenger passenger) {
		return bookingRepository.save(passenger);
	}
	 
}
