package com.mybootapp.flight.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import com.mybootapp.flight.model.Vendor;

public interface VendorRepository extends JpaRepository<Vendor, Long>{

	@Query("select v from Vendor v where v.source=?1")
	List<Vendor> getCourseByDepartment(String sname);

	@Query("select d from Vendor d where d.source=?1 and d.destination=?2")
	List<Vendor> getFlightBySourceDestination(String sname, String dname);

	@Query("select n from Vendor n where n.depDate=?1")
	List<Vendor> getAllFlight(String date);

	@Query("select d from Vendor d where d.source=?1 and d.destination=?2 and d.depDate=?3")
	List<Vendor> getFlightBySourceDestinationDepDate(String sname, String dname, String date);

}
	
	