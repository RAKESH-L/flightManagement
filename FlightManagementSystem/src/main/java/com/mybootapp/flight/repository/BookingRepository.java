package com.mybootapp.flight.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.mybootapp.flight.model.Passenger;

public interface BookingRepository extends JpaRepository<Passenger, Long>{

}
