package com.tarde.fruteria.entity.services;
import java.util.List;

import com.tarde.fruteria.entity.models.FruteriaModels;

public interface IFruteriaService {
	public List<FruteriaModels> getAllFruits();
	public void addFruit(FruteriaModels fruit);
	public void put(FruteriaModels fruit, long id);
	public void delete(long id);
	public FruteriaModels get(long id);
}
