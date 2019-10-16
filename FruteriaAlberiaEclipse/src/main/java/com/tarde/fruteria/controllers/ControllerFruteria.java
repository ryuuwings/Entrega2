package com.tarde.fruteria.controllers;
import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RestController;

import com.tarde.fruteria.entity.models.FruteriaModels;
import com.tarde.fruteria.entity.services.IFruteriaService;

@RestController
@CrossOrigin (origins ="*")
public class ControllerFruteria {
	@Autowired
	private IFruteriaService fruitService;
	
	@GetMapping("/api/fruits")
	private List<FruteriaModels> getFruits(){
		return fruitService.getAllFruits();
	}
	
	@PostMapping("/api/newfruit")
	private void addFruit(FruteriaModels fruit) {
		fruitService.addFruit(fruit);
	}
	
	@GetMapping("/api/fruits/{id}")
	public FruteriaModels getOneFruit(@PathVariable(value = "id") long id) {
		return fruitService.get(id);
	}
	
	@PutMapping("/api/fruits/{id}")
		public void updateFruit(FruteriaModels fruit,@PathVariable(value="id") long id) {
		fruitService.put(fruit,id);
	}
	
	@DeleteMapping("/api/fruits/{id}")
	public void deleteFruit(@PathVariable(value ="id")long id) {
		fruitService.delete(id);
	}
}
