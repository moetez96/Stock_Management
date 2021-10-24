package com.example.order.order.Repository;

import com.example.order.order.Entities.MvtStock;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface OrderRepository extends JpaRepository<MvtStock,Integer> {

}
