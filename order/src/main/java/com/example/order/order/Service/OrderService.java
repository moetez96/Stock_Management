package com.example.order.order.Service;

import com.example.order.order.Entities.MvtStock;
import com.example.order.order.Repository.OrderRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class OrderService {

    @Autowired
    private OrderRepository orderRepository;

    public List<MvtStock> addOrder(MvtStock mvtStock) {
         orderRepository.save(mvtStock);
        return orderRepository.findAll();
    }

    public List<MvtStock> findAll() {
        return orderRepository.findAll();
    }

    public MvtStock findById(int id) {
        return orderRepository.findById(id).get();
    }

    public List<MvtStock> updateOrder(int id, MvtStock newMvtStock) {
        MvtStock mvtstock = orderRepository.findById(id).get();
        mvtstock.setClient(newMvtStock.getClient());
        mvtstock.setDateMvt(newMvtStock.getDateMvt());
        mvtstock.setTypeOrder(newMvtStock.getTypeOrder());
        mvtstock.setItem(newMvtStock.getItem());
        mvtstock.setQuantite(newMvtStock.getQuantite());
        orderRepository.save(mvtstock);
        return orderRepository.findAll();
    }

    public List<MvtStock> deleteOrder(int id) {
        orderRepository.deleteById(id);
        return orderRepository.findAll();
    }
}
