package com.tarde.fruteria.entity.services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.tarde.fruteria.entity.dao.IFruteriaDao;
import com.tarde.fruteria.entity.models.FruteriaModels;

@Service
public class FruteriaServiceImpl implements IFruteriaService {
	@Autowired
	private IFruteriaDao fruitDao;
	
	@Override
	public List<FruteriaModels> getAllFruits() {
		// TODO Auto-generated method stub
		return (List<FruteriaModels>) fruitDao.findAll();
	}

	@Override
	public void addFruit(FruteriaModels fruit) {
		fruitDao.save(fruit);	
	}

	@Override
	public void put(FruteriaModels fruit, long id) {
		fruitDao.findById(id).ifPresent((x)->{
			fruit.setId(id);
			fruitDao.save(fruit);
		});
		
	}

	@Override
	public void delete(long id) {
		fruitDao.deleteById(id);
		
	}

	@Override
	public FruteriaModels get(long id) {
		return fruitDao.findById(id).get();
		
	}

}
