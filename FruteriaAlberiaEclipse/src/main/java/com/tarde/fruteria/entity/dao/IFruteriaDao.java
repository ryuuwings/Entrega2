package com.tarde.fruteria.entity.dao;
import org.springframework.data.repository.CrudRepository;

import com.tarde.fruteria.entity.models.FruteriaModels;

public interface IFruteriaDao extends CrudRepository<FruteriaModels, Long> {

}
