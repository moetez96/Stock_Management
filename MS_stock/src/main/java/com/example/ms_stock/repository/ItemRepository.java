package com.example.ms_stock.repository;

import com.example.ms_stock.entities.Item;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.jpa.repository.config.EnableJpaRepositories;
import org.springframework.stereotype.Repository;

@Repository
public interface ItemRepository extends JpaRepository <Item,Integer>  {

}
