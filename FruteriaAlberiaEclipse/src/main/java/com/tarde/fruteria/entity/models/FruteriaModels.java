package com.tarde.fruteria.entity.models;
import java.io.Serializable;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.validation.constraints.NotEmpty;

import com.sun.istack.NotNull;


@Entity(name = "frutas")
public class FruteriaModels implements Serializable {
	/**
	 * 
	 */
	public FruteriaModels() {
	}
	private static final long serialVersionUID = 1L;
	
	@Id
	@NotNull
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private long id;
	@Column(name = "name")
	@NotEmpty
	private String name;
	@Column(name = "price")
	@NotNull
	private float price;
	
	public static long getSerialversionuid() {
		return serialVersionUID;
	}
	public long getId() {
		return id;
	}
	public void setId(long id) {
		this.id = id;
	}
	public String getName() {
		return name;
	}
	public void setName(String name) {
		this.name = name;
	}
	public float getPrice() {
		return price;
	}
	public void setPrice(float price) {
		this.price = price;
	}
	public FruteriaModels(@NotNull long id, @NotEmpty String name, @NotNull float price) {
		super();
		this.id = id;
		this.name = name;
		this.price = price;
	}
	
}
