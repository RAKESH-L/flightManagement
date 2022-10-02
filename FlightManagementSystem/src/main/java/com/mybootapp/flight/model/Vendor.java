package com.mybootapp.flight.model;

import java.time.LocalDate;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

@Entity
public class Vendor {

	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	private Long id;

	private String name;
	private String source;
	private String destination;
	private String depDate;
	private String depTime;
	private String arvDate;
	private String arvTime;
	private double priceAdult;
	private double priceChild;
	private int seats;

	public Vendor(Long id, String name, String source, String destination, String depDate, String depTime,
			String arvDate, String arvTime, double priceAdult, double priceChild, int seats) {
		super();
		this.id = id;
		this.name = name;
		this.source = source;
		this.destination = destination;
		this.depDate = depDate;
		this.depTime = depTime;
		this.arvDate = arvDate;
		this.arvTime = arvTime;
		this.priceAdult = priceAdult;
		this.priceChild = priceChild;
		this.seats = seats;
	}

	public Vendor() {
		super();
		// TODO Auto-generated constructor stub
	}

	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	public String getSource() {
		return source;
	}

	public void setSource(String source) {
		this.source = source;
	}

	public String getDestination() {
		return destination;
	}

	public void setDestination(String destination) {
		this.destination = destination;
	}

	public String getDepDate() {
		return depDate;
	}

	public void setDepDate(String depDate) {
		this.depDate = depDate;
	}

	public String getDepTime() {
		return depTime;
	}

	public void setDepTime(String depTime) {
		this.depTime = depTime;
	}

	public String getArvDate() {
		return arvDate;
	}

	public void setArvDate(String arvDate) {
		this.arvDate = arvDate;
	}

	public String getArvTime() {
		return arvTime;
	}

	public void setArvTime(String arvTime) {
		this.arvTime = arvTime;
	}

	public double getPriceAdult() {
		return priceAdult;
	}

	public void setPriceAdult(double priceAdult) {
		this.priceAdult = priceAdult;
	}

	public double getPriceChild() {
		return priceChild;
	}

	public void setPriceChild(double priceChild) {
		this.priceChild = priceChild;
	}

	public int getSeats() {
		return seats;
	}

	public void setSeats(int seats) {
		this.seats = seats;
	}

	@Override
	public String toString() {
		return "Vendor [id=" + id + ", name=" + name + ", source=" + source + ", destination=" + destination
				+ ", depDate=" + depDate + ", depTime=" + depTime + ", arvDate=" + arvDate + ", arvTime=" + arvTime
				+ ", priceAdult=" + priceAdult + ", priceChild=" + priceChild + ", seats=" + seats + "]";
	}

}
